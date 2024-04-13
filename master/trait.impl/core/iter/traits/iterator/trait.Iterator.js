(function() {var implementors = {
"frame_support":[["impl&lt;K: <a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Decode.html\" title=\"trait frame_support::pallet_prelude::Decode\">Decode</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, T: <a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Decode.html\" title=\"trait frame_support::pallet_prelude::Decode\">Decode</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, H: <a class=\"trait\" href=\"frame_support/trait.ReversibleStorageHasher.html\" title=\"trait frame_support::ReversibleStorageHasher\">ReversibleStorageHasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/migration/struct.StorageKeyIterator.html\" title=\"struct frame_support::storage::migration::StorageKeyIterator\">StorageKeyIterator</a>&lt;K, T, H&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/struct.KeyPrefixIterator.html\" title=\"struct frame_support::storage::KeyPrefixIterator\">KeyPrefixIterator</a>&lt;T&gt;"],["impl&lt;T, OnRemoval: <a class=\"trait\" href=\"frame_support/storage/trait.PrefixIteratorOnRemoval.html\" title=\"trait frame_support::storage::PrefixIteratorOnRemoval\">PrefixIteratorOnRemoval</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/struct.PrefixIterator.html\" title=\"struct frame_support::storage::PrefixIterator\">PrefixIterator</a>&lt;T, OnRemoval&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/struct.ChildTriePrefixIterator.html\" title=\"struct frame_support::storage::ChildTriePrefixIterator\">ChildTriePrefixIterator</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Decode.html\" title=\"trait frame_support::pallet_prelude::Decode\">Decode</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/migration/struct.StorageIterator.html\" title=\"struct frame_support::storage::migration::StorageIterator\">StorageIterator</a>&lt;T&gt;"]],
"node_bench":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"node_bench/construct/struct.TransactionsIterator.html\" title=\"struct node_bench::construct::TransactionsIterator\">TransactionsIterator</a>"]],
"node_testing":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"node_testing/bench/struct.BlockContentIterator.html\" title=\"struct node_testing::bench::BlockContentIterator\">BlockContentIterator</a>&lt;'a&gt;"]],
"polkadot_erasure_coding":[["impl&lt;'a, I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"polkadot_erasure_coding/struct.Branches.html\" title=\"struct polkadot_erasure_coding::Branches\">Branches</a>&lt;'a, I&gt;"]],
"polkadot_node_network_protocol":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"polkadot_node_network_protocol/request_response/struct.ProtocolIter.html\" title=\"struct polkadot_node_network_protocol::request_response::ProtocolIter\">ProtocolIter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"polkadot_node_network_protocol/peer_set/struct.ValidationVersionIter.html\" title=\"struct polkadot_node_network_protocol::peer_set::ValidationVersionIter\">ValidationVersionIter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"polkadot_node_network_protocol/peer_set/struct.CollationVersionIter.html\" title=\"struct polkadot_node_network_protocol::peer_set::CollationVersionIter\">CollationVersionIter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"polkadot_node_network_protocol/peer_set/struct.PeerSetIter.html\" title=\"struct polkadot_node_network_protocol::peer_set::PeerSetIter\">PeerSetIter</a>"]],
"polkadot_statement_table":[["impl&lt;'a, Ctx: <a class=\"trait\" href=\"polkadot_statement_table/generic/trait.Context.html\" title=\"trait polkadot_statement_table::generic::Context\">Context</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"polkadot_statement_table/generic/struct.DrainMisbehaviors.html\" title=\"struct polkadot_statement_table::generic::DrainMisbehaviors\">DrainMisbehaviors</a>&lt;'a, Ctx&gt;"]],
"sc_client_api":[["impl&lt;State, Block&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sc_client_api/backend/struct.KeysIter.html\" title=\"struct sc_client_api::backend::KeysIter\">KeysIter</a>&lt;State, Block&gt;<span class=\"where fmt-newline\">where\n    Block: BlockT,\n    State: <a class=\"trait\" href=\"sc_client_api/backend/trait.StateBackend.html\" title=\"trait sc_client_api::backend::StateBackend\">StateBackend</a>&lt;HashingFor&lt;Block&gt;&gt;,</span>"],["impl&lt;State, Block&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sc_client_api/backend/struct.PairsIter.html\" title=\"struct sc_client_api::backend::PairsIter\">PairsIter</a>&lt;State, Block&gt;<span class=\"where fmt-newline\">where\n    Block: BlockT,\n    State: <a class=\"trait\" href=\"sc_client_api/backend/trait.StateBackend.html\" title=\"trait sc_client_api::backend::StateBackend\">StateBackend</a>&lt;HashingFor&lt;Block&gt;&gt;,</span>"]],
"sp_consensus_beefy":[["impl&lt;AuthorityId&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_consensus_beefy/test_utils/struct.KeyringIter.html\" title=\"struct sp_consensus_beefy::test_utils::KeyringIter\">KeyringIter</a>&lt;AuthorityId&gt;"]],
"sp_keyring":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_keyring/ed25519/struct.KeyringIter.html\" title=\"struct sp_keyring::ed25519::KeyringIter\">KeyringIter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_keyring/sr25519/struct.KeyringIter.html\" title=\"struct sp_keyring::sr25519::KeyringIter\">KeyringIter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_keyring/bandersnatch/struct.KeyringIter.html\" title=\"struct sp_keyring::bandersnatch::KeyringIter\">KeyringIter</a>"]],
"sp_runtime":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_runtime/offchain/http/struct.ResponseBody.html\" title=\"struct sp_runtime::offchain::http::ResponseBody\">ResponseBody</a>"]],
"sp_state_machine":[["impl&lt;'a, H, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_state_machine/backend/struct.PairsIter.html\" title=\"struct sp_state_machine::backend::PairsIter\">PairsIter</a>&lt;'a, H, I&gt;<span class=\"where fmt-newline\">where\n    H: Hasher,\n    I: <a class=\"trait\" href=\"sp_state_machine/backend/trait.StorageIterator.html\" title=\"trait sp_state_machine::backend::StorageIterator\">StorageIterator</a>&lt;H&gt;,</span>"],["impl&lt;'a, H, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_state_machine/backend/struct.KeysIter.html\" title=\"struct sp_state_machine::backend::KeysIter\">KeysIter</a>&lt;'a, H, I&gt;<span class=\"where fmt-newline\">where\n    H: Hasher,\n    I: <a class=\"trait\" href=\"sp_state_machine/backend/trait.StorageIterator.html\" title=\"trait sp_state_machine::backend::StorageIterator\">StorageIterator</a>&lt;H&gt;,</span>"]],
"sp_std":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()