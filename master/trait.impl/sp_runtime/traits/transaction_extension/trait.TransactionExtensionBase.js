(function() {var implementors = {
"bp_polkadot_bulletin":[["impl TransactionExtensionBase for <a class=\"struct\" href=\"bp_polkadot_bulletin/struct.TransactionExtension.html\" title=\"struct bp_polkadot_bulletin::TransactionExtension\">TransactionExtension</a>"]],
"bp_runtime":[["impl&lt;S&gt; TransactionExtensionBase for <a class=\"struct\" href=\"bp_runtime/extensions/struct.GenericTransactionExtension.html\" title=\"struct bp_runtime::extensions::GenericTransactionExtension\">GenericTransactionExtension</a>&lt;S&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"bp_runtime/extensions/trait.TransactionExtensionSchema.html\" title=\"trait bp_runtime::extensions::TransactionExtensionSchema\">TransactionExtensionSchema</a>,\n    S::<a class=\"associatedtype\" href=\"bp_runtime/extensions/trait.TransactionExtensionSchema.html#associatedtype.Payload\" title=\"type bp_runtime::extensions::TransactionExtensionSchema::Payload\">Payload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    S::<a class=\"associatedtype\" href=\"bp_runtime/extensions/trait.TransactionExtensionSchema.html#associatedtype.Implicit\" title=\"type bp_runtime::extensions::TransactionExtensionSchema::Implicit\">Implicit</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"bridge_hub_rococo_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionBase.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionBase\">TransactionExtensionBase</a> for <a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_rococo_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>"]],
"bridge_hub_westend_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionBase.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionBase\">TransactionExtensionBase</a> for <a class=\"struct\" href=\"bridge_hub_westend_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_westend_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>"]],
"bridge_runtime_common":[["impl&lt;T: <a class=\"trait\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html\" title=\"trait bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension\">RefundTransactionExtension</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundTransactionExtensionAdapter.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundTransactionExtensionAdapter\">RefundTransactionExtensionAdapter</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::Runtime\">Runtime</a> as GrandpaConfig&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.GrandpaInstance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::GrandpaInstance\">GrandpaInstance</a>&gt;&gt;::BridgedChain: Chain&lt;BlockNumber = RelayBlockNumber&gt;,\n    &lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::Runtime\">Runtime</a> as Config&gt;::RuntimeCall: Dispatchable&lt;Info = DispatchInfo, PostInfo = PostDispatchInfo&gt; + IsSubType&lt;CallableCallFor&lt;Pallet&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::Runtime\">Runtime</a>&gt;, T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::Runtime\">Runtime</a>&gt;&gt; + GrandpaCallSubType&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::Runtime\">Runtime</a>, T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.GrandpaInstance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::GrandpaInstance\">GrandpaInstance</a>&gt; + <a class=\"trait\" href=\"bridge_runtime_common/messages_call_ext/trait.MessagesCallSubType.html\" title=\"trait bridge_runtime_common::messages_call_ext::MessagesCallSubType\">MessagesCallSubType</a>&lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.Runtime\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::Runtime\">Runtime</a>, &lt;T::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundTransactionExtension.html#associatedtype.Msgs\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundTransactionExtension::Msgs\">Msgs</a> as <a class=\"trait\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableMessagesLaneId.html\" title=\"trait bridge_runtime_common::refund_relayer_extension::RefundableMessagesLaneId\">RefundableMessagesLaneId</a>&gt;::<a class=\"associatedtype\" href=\"bridge_runtime_common/refund_relayer_extension/trait.RefundableMessagesLaneId.html#associatedtype.Instance\" title=\"type bridge_runtime_common::refund_relayer_extension::RefundableMessagesLaneId::Instance\">Instance</a>&gt;,</span>"]],
"cumulus_primitives_storage_weight_reclaim":[["impl&lt;T: Config + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"cumulus_primitives_storage_weight_reclaim/struct.StorageWeightReclaim.html\" title=\"struct cumulus_primitives_storage_weight_reclaim::StorageWeightReclaim\">StorageWeightReclaim</a>&lt;T&gt;"]],
"frame":[],
"frame_support":[["impl&lt;V&gt; <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionBase.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionBase\">TransactionExtensionBase</a> for <a class=\"struct\" href=\"frame_support/transaction_extensions/struct.VerifyMultiSignature.html\" title=\"struct frame_support::transaction_extensions::VerifyMultiSignature\">VerifyMultiSignature</a>&lt;V&gt;<span class=\"where fmt-newline\">where\n    V: <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionInterior.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionInterior\">TransactionExtensionInterior</a> + <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>,\n    &lt;V::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>: <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionInterior.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionInterior\">TransactionExtensionInterior</a>,</span>"]],
"frame_system":[["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"frame_system/struct.CheckGenesis.html\" title=\"struct frame_system::CheckGenesis\">CheckGenesis</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"frame_system/struct.CheckSpecVersion.html\" title=\"struct frame_system::CheckSpecVersion\">CheckSpecVersion</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"frame_system/struct.CheckTxVersion.html\" title=\"struct frame_system::CheckTxVersion\">CheckTxVersion</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"frame_system/struct.CheckNonce.html\" title=\"struct frame_system::CheckNonce\">CheckNonce</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"frame_system/struct.CheckNonZeroSender.html\" title=\"struct frame_system::CheckNonZeroSender\">CheckNonZeroSender</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"frame_system/struct.CheckWeight.html\" title=\"struct frame_system::CheckWeight\">CheckWeight</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"frame_system/struct.CheckMortality.html\" title=\"struct frame_system::CheckMortality\">CheckMortality</a>&lt;T&gt;"]],
"pallet_asset_conversion_tx_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"pallet_asset_conversion_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_conversion_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::Fungibles\">Fungibles</a> as Inspect&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    &lt;&lt;T as Config&gt;::OnChargeTransaction as OnChargeTransaction&lt;T&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.Balance\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::Balance\">Balance</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_conversion_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_conversion_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_conversion_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_conversion_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.AssetId\" title=\"type pallet_asset_conversion_tx_payment::OnChargeAssetTransaction::AssetId\">AssetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]],
"pallet_asset_tx_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"pallet_asset_tx_payment/struct.ChargeAssetTxPayment.html\" title=\"struct pallet_asset_tx_payment::ChargeAssetTxPayment\">ChargeAssetTxPayment</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a> as Inspect&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    &lt;&lt;T as Config&gt;::OnChargeTransaction as OnChargeTransaction&lt;T&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>&gt; + IsType&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.Balance\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::Balance\">Balance</a>&gt;,\n    &lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.AssetId\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::AssetId\">AssetId</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Credit&lt;T::AccountId, T::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.Fungibles\" title=\"type pallet_asset_tx_payment::pallet::Config::Fungibles\">Fungibles</a>&gt;: IsType&lt;&lt;&lt;T as <a class=\"trait\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html\" title=\"trait pallet_asset_tx_payment::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/pallet/trait.Config.html#associatedtype.OnChargeAssetTransaction\" title=\"type pallet_asset_tx_payment::pallet::Config::OnChargeAssetTransaction\">OnChargeAssetTransaction</a> as <a class=\"trait\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html\" title=\"trait pallet_asset_tx_payment::OnChargeAssetTransaction\">OnChargeAssetTransaction</a>&lt;T&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_asset_tx_payment/trait.OnChargeAssetTransaction.html#associatedtype.LiquidityInfo\" title=\"type pallet_asset_tx_payment::OnChargeAssetTransaction::LiquidityInfo\">LiquidityInfo</a>&gt;,</span>"]],
"pallet_example_basic":[["impl&lt;T: <a class=\"trait\" href=\"pallet_example_basic/pallet/trait.Config.html\" title=\"trait pallet_example_basic::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"pallet_example_basic/struct.WatchDummy.html\" title=\"struct pallet_example_basic::WatchDummy\">WatchDummy</a>&lt;T&gt;"]],
"pallet_skip_feeless_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_skip_feeless_payment/pallet/trait.Config.html\" title=\"trait pallet_skip_feeless_payment::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, S: TransactionExtensionBase&gt; TransactionExtensionBase for <a class=\"struct\" href=\"pallet_skip_feeless_payment/struct.SkipCheckIfFeeless.html\" title=\"struct pallet_skip_feeless_payment::SkipCheckIfFeeless\">SkipCheckIfFeeless</a>&lt;T, S&gt;"]],
"pallet_sudo":[["impl&lt;T: <a class=\"trait\" href=\"pallet_sudo/pallet/trait.Config.html\" title=\"trait pallet_sudo::pallet::Config\">Config</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"pallet_sudo/struct.CheckOnlySudoAccount.html\" title=\"struct pallet_sudo::CheckOnlySudoAccount\">CheckOnlySudoAccount</a>&lt;T&gt;"]],
"pallet_transaction_payment":[["impl&lt;T: <a class=\"trait\" href=\"pallet_transaction_payment/pallet/trait.Config.html\" title=\"trait pallet_transaction_payment::pallet::Config\">Config</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"pallet_transaction_payment/struct.ChargeTransactionPayment.html\" title=\"struct pallet_transaction_payment::ChargeTransactionPayment\">ChargeTransactionPayment</a>&lt;T&gt;"]],
"polkadot_runtime_common":[["impl&lt;T: <a class=\"trait\" href=\"polkadot_runtime_common/claims/pallet/trait.Config.html\" title=\"trait polkadot_runtime_common::claims::pallet::Config\">Config</a>&gt; TransactionExtensionBase for <a class=\"struct\" href=\"polkadot_runtime_common/claims/struct.PrevalidateAttests.html\" title=\"struct polkadot_runtime_common::claims::PrevalidateAttests\">PrevalidateAttests</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    &lt;T as Config&gt;::RuntimeCall: IsSubType&lt;<a class=\"enum\" href=\"polkadot_runtime_common/claims/pallet/enum.Call.html\" title=\"enum polkadot_runtime_common::claims::pallet::Call\">Call</a>&lt;T&gt;&gt;,</span>"]],
"polkadot_sdk_docs":[["impl <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionBase.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionBase\">TransactionExtensionBase</a> for <a class=\"struct\" href=\"polkadot_sdk_docs/reference_docs/transaction_extensions/transaction_extensions_example/struct.AddToSignaturePayload.html\" title=\"struct polkadot_sdk_docs::reference_docs::transaction_extensions::transaction_extensions_example::AddToSignaturePayload\">AddToSignaturePayload</a>"],["impl <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionBase.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionBase\">TransactionExtensionBase</a> for <a class=\"struct\" href=\"polkadot_sdk_docs/reference_docs/transaction_extensions/transaction_extensions_example/struct.AddToPayload.html\" title=\"struct polkadot_sdk_docs::reference_docs::transaction_extensions::transaction_extensions_example::AddToPayload\">AddToPayload</a>"]],
"polkadot_service":[],
"shell_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionBase.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionBase\">TransactionExtensionBase</a> for <a class=\"struct\" href=\"shell_runtime/struct.DisallowSigned.html\" title=\"struct shell_runtime::DisallowSigned\">DisallowSigned</a>"]],
"sp_runtime":[],
"substrate_test_runtime":[["impl <a class=\"trait\" href=\"sp_runtime/traits/transaction_extension/trait.TransactionExtensionBase.html\" title=\"trait sp_runtime::traits::transaction_extension::TransactionExtensionBase\">TransactionExtensionBase</a> for <a class=\"struct\" href=\"substrate_test_runtime/struct.CheckSubstrateCall.html\" title=\"struct substrate_test_runtime::CheckSubstrateCall\">CheckSubstrateCall</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()