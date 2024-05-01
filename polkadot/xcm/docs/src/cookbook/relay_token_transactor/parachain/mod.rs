//! # Runtime

use frame::{deps::frame_system, prelude::*, runtime::prelude::*, traits::IdentityLookup};
use xcm_executor::XcmExecutor;
use xcm_simulator::mock_message_queue;

mod xcm_config;
use xcm_config::XcmConfig;

pub type Block = frame_system::mocking::MockBlock<Runtime>;
pub type AccountId = frame::deps::sp_runtime::AccountId32;
pub type Balance = u64;

construct_runtime! {
	pub struct Runtime {
		System: frame_system,
		MessageQueue: mock_message_queue,
		Balances: pallet_balances,
		XcmPallet: pallet_xcm,
	}
}

#[derive_impl(frame_system::config_preludes::TestDefaultConfig as frame_system::DefaultConfig)]
impl frame_system::Config for Runtime {
	type Block = Block;
	type AccountId = AccountId;
	type Lookup = IdentityLookup<AccountId>;
	type AccountData = pallet_balances::AccountData<Balance>;
}

impl mock_message_queue::Config for Runtime {
	type RuntimeEvent = RuntimeEvent;
	type XcmExecutor = XcmExecutor<XcmConfig>;
}

#[derive_impl(pallet_balances::config_preludes::TestDefaultConfig as pallet_balances::DefaultConfig)]
impl pallet_balances::Config for Runtime {
	type Balance = Balance;
	type AccountStore = System;
}
