'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2b00042f7481c7b056c4b410d28f33cf",
".git/config": "9c7c0d42ee4a895ee1f6b7fe7ad92f5d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "601fceb0ab0acf492f3838725e5a81db",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "25d88f9b36af0e4eac6ca3f563214d7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c01688d9f14aa463aa483c78c7bd6633",
".git/logs/refs/heads/master": "c01688d9f14aa463aa483c78c7bd6633",
".git/logs/refs/remotes/origin/main": "f44d296c2b3c7e884e347dd714bff8a8",
".git/logs/refs/remotes/origin/master": "3811d954da26cf268038188d054f8118",
".git/objects/02/c8c03307c33fe192fe1b9e7ec47799848a18f3": "c9bd17df5da0a5167842091fa6b61f79",
".git/objects/03/6841ff773d7fff53eab4069494c3c434318d79": "f1888c57ff8c9fe6e29b213002012987",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/467a0a0bfa23cf8171e2d23473a927c125c020": "7e8e67dc5b17d061ec959211af692a71",
".git/objects/07/32ca8fbd1b42e04fe7d70543601820474f6003": "68fafbd6dec6b7f45313b9ebc980c064",
".git/objects/08/0f15c4b2fb6c6fe2098bbd2fcf200be36f5a36": "1b747db92023f5f935f3019f53175d4e",
".git/objects/08/b3d74ee57c1121aaefb63cdfa2d5c0b5f9f9c4": "102259bc93c8b8f6df221ccafcf8a698",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/b3a5b1af130bfe6c4e515584fef56a9de8f8db": "374a2f7f27cffff1874380da28e9bdd1",
".git/objects/0c/4edf9f2875e9af7feace356ad67eddb79c35b8": "0f47e08c1f6e985aa570a1b3fc6c5b3b",
".git/objects/11/b69bcf9e4ebac6cc27f4889a79af12252d02e0": "68dfc69ddca949cdb583c9c6313f550b",
".git/objects/11/c81fddb1b0c675e373f71a3d481ab7ab78147b": "084bb57d87f3d4e0dea758c24b8c0160",
".git/objects/12/14faafb2281688933a3974b09bb9b85621e99b": "3ea241f72fd605030198505e1d1bc120",
".git/objects/13/cb4006d51cdea35714dbf0be008dfeb1452611": "806f525b6b52be071eb48820367d8909",
".git/objects/15/172e01bf010054a59cc0237107776044adf29f": "764c24b578b802d4bdb64b90eadff8d7",
".git/objects/19/6f45dc6a51d6b8da33c496a6a9359e04d51fa3": "e93eaaf93a09ba1b73d60ef886b82421",
".git/objects/1a/e5cf858c4809fb4c3386e921ddfe423e1dbaf8": "4d632c646d32f7989362e42289d0727f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/de7bf771ac99b73d9202917fd1714dba5b84c0": "7c252d17d55969e6820af140e54fc94a",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/25/171dd6420a3b4d031dedbd3d692f217099c729": "75ab7f39f553f60d70fa7be3ba617730",
".git/objects/26/23581a03020f2199a2e4952c074c91f0b51e6c": "67fe5f35c22b7eef07d338326f33c137",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/27/6b0304763f31d543773e0130035e625888978c": "8567b6e75bec20f7ee781428d26307a9",
".git/objects/28/93958e9a347c1946c11c95f9b3cb9c097d495c": "2576fb732a338385ca75033a85f262e7",
".git/objects/2a/60fab21c4321c8a135dd6f1fe2cdecb7e495f2": "cfd2f7a37e086acd9bff96486ec0e974",
".git/objects/2b/15fca551bea8c90d77dcc84ab4ec96b1ee8262": "be4ed861406d36030eb3a11edb60a795",
".git/objects/2b/241699c560d1857587dbc1e222432fee5bf2d6": "fd17fb135f201724274d0cb80fed9fde",
".git/objects/2c/4b4e55101785a9675128a53658cbd152f9c0ea": "ab6f5d4456dc0906511ee98fa77417e4",
".git/objects/2c/a7e126b9fe384078e0dbede3f5ffa41d2188b1": "e98a095dc07e954d47ef13991201bc61",
".git/objects/30/fd32c2b7adaf2f8505710784a004237e28a49c": "e876238e8cb99bce9b5e50fa2534be10",
".git/objects/32/0d2f9a1ea38adc2c74f3e185d8518b896dd11a": "c03055ff6a42750293865a5e175e418a",
".git/objects/33/d4568c153d9a6773d1e5fbbe9226809679356d": "cde5331b73a57b10097d7523cd863867",
".git/objects/33/effddd754450bc9f3b339cbe9f3f4456e97ced": "96dbc9d0663bf4626cd99f6fe6b4d9a6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/60c8f1dfad53a633529e3b5b2a1ffbeb67ea15": "ef87e29325991a82f28225ed573a4a9c",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/c187fc014b8b7e6f406a6adb91d3bee931f6b5": "559fc3617413cc235d224a140019ba32",
".git/objects/40/1f2eeeba55533485b47089d763cb95337c70f8": "b9958ce6b28df76ebc01ae0a698d1295",
".git/objects/41/2b926dffad952b7c82aef4f1ef0bb93e6a69ac": "d03cf05393dd082e875dcdf1f6d060e5",
".git/objects/41/2efc352414207e14cfbea215194ec430a381d0": "3b04e726635d6b3fa1b62e58a6155f15",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/24878fc0c22ae229eb998eea3fea1655aaa7bf": "51fe2a897da15ccbbdf25efe9ac9d004",
".git/objects/49/dcdf1e0854940d9409ba7ba34ec78a8aeebc61": "fd1b7aa7f9b9d5071de7bc14d3e6f05e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/84312f0aa28e546fdfb3d55e4a7d95f9bb0c25": "dc835c96c33662f54642967a59959066",
".git/objects/4c/42dd7744a742bff19c2169beae708ea9706ed8": "73c95c3b6367309e088a011fa1cf6516",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/e9a13ea5a382d006588290ce17d2f4697b0ae5": "65b11226d5d2afb6b5e7eab03769c8bb",
".git/objects/54/39cf2fedbdc4a2132ef3d0b093503f44c92c27": "ee47d67394a8df90a315e65e66466ba4",
".git/objects/55/55c29bb2a48b3af433eb06c35cf421b7095410": "6ca59689b777ed25dd3c2b1e5c247f6f",
".git/objects/58/1985675e9dd38153effc260036e96f83fbd2e7": "64f720b4cd52ed7107c0ab6e3c74ee26",
".git/objects/5a/8d058c4b54070813737e8f2bb42a999c01d001": "d0215f5ac540ec89127561755ef290af",
".git/objects/5b/c5ba7859b46fbaf85210bf702c31504f59d796": "be0a00a6728cd5d88ae954a1ebc55049",
".git/objects/5d/cae19476d7d36dab3e58342b5bef6b4221092b": "b652b2f0b4e905cfee138e7a5806db62",
".git/objects/5e/2d6ec3574300889d6093109e35f39ef71d5cc0": "19466c65a8b7307b7888db971953b0c9",
".git/objects/5f/6b108fd97a9f5780da5c55ac829bc706d0589e": "6a956cb05be010a96272689c6fd37a0e",
".git/objects/60/9022f477140e6fa6d36b8f3c74182a8a5e5d30": "74d8fdc1ceb4af4faa512eefab2d89a4",
".git/objects/61/194208c0da4067f7ffd9c4127e41dc2e9e1458": "f7eafcd88183ca7fd0430c4bfd369c33",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/f16152ac6416e293dffbb044c01dbf16e537e3": "af2c7394d7a226f025d8c72f862a4d6b",
".git/objects/65/e1d886168626e69c9e8a988a35c88738509ee1": "b0ba126984d5e17d9f2fa73830b69232",
".git/objects/66/27bbf90abb44972f251de21a3200973f7a3d81": "5b9bd6ef405a773bbce00ebff84ee03e",
".git/objects/67/2d9261f2dc8afc56f0696ade74cf866b9f5132": "80e0999e4e8a579c80fdde3c77300cad",
".git/objects/67/844c69493bd8655f7861fe0bb00e76c5ff19f3": "0d75c8d38a4a06f55ff15589963b85d0",
".git/objects/69/a9b09b03ed7d0d572fd3871844ea3d0edad779": "831ac4d16860a0ccd0d50aa8406b5394",
".git/objects/6a/5b824ef830e73847a63c9c0a7314da7f0dafb5": "538a87b195a99df333394b06932882b8",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6c/7ab24b033fa8755ae19058e71b3d89f68288bc": "7ad246d82f2b101647472590e9b47bcb",
".git/objects/6d/46806f0fe2b07cb1d71ddaf4fd556e19c0e373": "d9466ba6dbe248c133404d63dd9fc301",
".git/objects/6e/09c9ea23a1054b83f0b777582f87a87147ecdd": "06762745f09fe2bbc3a38687dff1cf27",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/72/04ddf55f1164506a1e9cc11d2e996e42e767f6": "2a918adc58a660c3d1acaf045005a1a7",
".git/objects/76/cf41144f4099be188cff139d4a3947a45d5138": "565c63431ac166c44f178180c1b9bcfc",
".git/objects/77/563e7cb94c31660079a375309d581809aa3984": "7feda61661d703dac7633ac027d4f5a6",
".git/objects/77/70a01aed24d821018755f41bf45dd6e592a38c": "6eb32e29c08550600ff43d14b07d5a91",
".git/objects/77/7adec7cb5496659ff63adc1094627e78dc6836": "12aacb2475ca25d1527300e8e34f70d5",
".git/objects/78/b4ee6b641ba5dc9c54498facf63f6d6a87dcac": "30008cf6ddb77babdecb49163cf01d36",
".git/objects/79/4d1ab287891662b754916f35e8f34f81a4e76f": "3f63cee6b1626a3cbe9c3010ac97e6f8",
".git/objects/7d/e301ed16b914800d085472cb2492461c4c6c25": "6c1729413ee44839c07121155ad88953",
".git/objects/7e/c482c6af280395034b6b35fe51cc67aaaecf5a": "e5214f38feb5406821576134a78669dd",
".git/objects/7e/dc9fd96c63b3bc942c83f99941acae28d4fd73": "43979554056d2e90956de3bc7c649060",
".git/objects/7e/e5adccf00828dbd5cf5a96bda3b9a10d2be6f6": "3277a3e27daabe871ea64fb4d5fad9a3",
".git/objects/80/aafc6ce9784af1198dfe78b03f8882b22b2df0": "d25b53cee1e07b69fc39a4f5bbb422fe",
".git/objects/84/8d454187b0008069a09290481bf49bc552c8f2": "baee2ff30ffc4ed4e04876bce5908cf2",
".git/objects/86/d7ba81a81b8dec832833f016edcc3d5dc48375": "d22c108a58c4cf4a5257e0a73174d2dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/729ba915cf7f3f17b4d098e8bda646b438caf2": "0cce62ed0096248b14bfd46a851a7dfe",
".git/objects/8c/7b4ee6cca88cd806e0c2e833e984db1083aa55": "4b76202268fa9ba53761a4eb11842cd9",
".git/objects/8c/b93c5085f189845d351414b4e4f1515ea66f60": "f30206c803b43a425ea8986f45099e74",
".git/objects/8c/cdee13bac6b7377364756fce71b6926c41996c": "e8abd4c563c5ee85aa4d623b931bab1b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/e6701d96b1c0055bfb3281d0486defafcdab48": "d30e739bf88a6cb94ed2216a47fd1e95",
".git/objects/94/1e717aea242a647a0eaec1f13533ddfd0b639b": "cd60a6ad1b0b6aa18b9fcb3f72a87518",
".git/objects/95/e4ee8de484bf1cbe527fe827d458aef0a98de9": "0bfdaf7084cfbaddff531f9be03687c0",
".git/objects/98/89fb6b7fdb1491923e08903f35c3fd0866eec7": "92337a446714bb6fe1488391632fc8c1",
".git/objects/99/a0cd88a2d4caa135e5bc40eff002209c7199b6": "9834586529541a177a44b3b227f195b4",
".git/objects/9b/ff56b70b2b110eae2c30cc670688baf3a2c97d": "dd93d2a13fe59c199969135eb38cfb39",
".git/objects/9d/6e4b3deb77b3bb8730544de9aa1830705c86e3": "862db579449ed66f79002c346bec5e6b",
".git/objects/9f/dd138f2e048dbc6a068af56b9cb01591b62961": "fa5e2b388b9db517f9d9416843fda0b2",
".git/objects/a2/35fc14bd9eec72657d5033a2f6ad7dce53fe75": "bf275a14528885cb7bbad2c831bd9894",
".git/objects/a4/52207633ccd1781aa8f270b2c0ea1f370d370f": "39947167855b89c150ffa4ad7f04a011",
".git/objects/a4/b9e3424709c88fa91718e2cbc8be3227a8ace5": "ded6d9edcd3b96b9e62b2a747b0c1db9",
".git/objects/a6/0c68f1e36e68b868f870e6e3b3db3f8a5f6a63": "96fc38665987200e2589bcff01577925",
".git/objects/a8/0ed57984792600a7a9bb91ea3db0841358fa41": "170133418662836bd74701a279bf5cf0",
".git/objects/a8/673795df9791b25aac703365025ce35ac9b1f2": "185c36ce9a3d29ee9714cae0c1592822",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/3ad76c6216678ea1d41f336760351bb03baf18": "3174248d3358b06cf36ea3bc5e8ea743",
".git/objects/b6/97bd63432e9377a7d45ca106a923ccf05f1928": "ed3bb0c420abfbe309ad701231b308b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ed2199fc5dbde113df1333de7e31de1b069e06": "a5e87c30c3abf113a3396c6dea91c976",
".git/objects/b8/89dacd822c2db4faf9953c8dab407a188c1e95": "4de373a0c1de3f81379aee163de729af",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6b32c19b20a45ae6facfc4c2a697f3b39734eb": "1f3ce7ae702b4d6cd44a9459dca91b87",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/a3d8f0dd7d783f3fe79db9f3ea72d378683195": "668f07c1bff25ce276dc26762f8b2468",
".git/objects/bc/c964b4a244df6e5efd898e4a886562bbd4958f": "f70599119fe9a8b7a9818f627ac4f4cf",
".git/objects/bd/097269784a079e9f2d068e865617b4fb8058e8": "ffd33670bdd7ab70afce7f460060be48",
".git/objects/bd/1338677f7e4c1cd80a7aacdcd55fedb3dc3d5d": "a4a263c33deba90847ea93baa077bcc8",
".git/objects/be/dff789470cd554ff7184eac6b757dcdcf67aa0": "abb096d68651a79ff8a3e9e4ff311fec",
".git/objects/bf/c9e7702cd3bdb80f4701a7814391a00cf37c7a": "f6c80f835f1142aeecbc8b1f48b5aed3",
".git/objects/c2/2f373e9be96290d81a658d0fc27fe8b72b7ee3": "4a57d1c0b6689334a25b75f791154703",
".git/objects/c3/664947f2151925f566f97be638f9329426224f": "229b7fbdf63774dcf534c549ed7f36b9",
".git/objects/c4/96b98db06d1ddb4e3c268e04c3113cd161eae2": "6014e3bf8f108edc92b4c425e3b539ea",
".git/objects/c5/9d702df59e77bf5865cd640abba10a9788e46f": "cc2282e5ef988a170e149de5c8e2f561",
".git/objects/c6/276c8aade10576809d5e7b5a96a0971e6110c2": "f65b0cfc6a6ff5c2640cb14f5dc71b0d",
".git/objects/c6/99672f6b5bb054bb13fc85bd8be58928f9230c": "7c8f3beec32cc695a3e9873a42286772",
".git/objects/c7/476fbeef75048053783ac847a2984960cab3d7": "7cda9c373b11aeec3d3976edf76eae0d",
".git/objects/cf/eecda507b12bfc2cf72a10d2da4ec937cc0e57": "bde5d29afb164c39eefc77a30d3334b6",
".git/objects/d2/3b0d0df5198aedb0712913abc3e9535c289e3b": "72fb8627aeb336521f57f70fdd69435d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/fd2c38e9ccf1cf92a52e4785228ef8198618ef": "1c31dc4f752fefa024d1546aca39bcfb",
".git/objects/d7/4ae7ddbf6f4c6e2a63966722dbc32e19f004cd": "58ebdf8ccc0ef7322097e2210c22aee0",
".git/objects/d8/7847ff90fdfd222e6bc8b9a8e3f09fce6d62d3": "1c0177b8f2e2fc0091655e3eaf131b64",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/df/1a2977849718e4966bffe3c81dc8800e20fbb4": "cc37ed4ff1abe9217e3304fa67344fb8",
".git/objects/df/981a8f1dfac58158b1e25fee74105f735f5a14": "30c5350381216e6ff08f368d52e8c9de",
".git/objects/e3/d821834574b0d1dfdf138a22f5956ee3985f72": "91710b876c95cc3570cc21b2532ed8ae",
".git/objects/e4/fe14b36fdcfd659cd4f1e8d1d1f02316e087e5": "d2e0aad2338ae2ef2696e52f1fe2d324",
".git/objects/e5/b7a40fd14e718d4bbbe9d4860c5f4e0f42e63a": "ffcfdd5801571972a562acfa1d1e5348",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ea/2901bc11ef6c792310a0dd776e4dd901839097": "b3cd0285f94088f28edf8f6fddf1cc1f",
".git/objects/eb/65f41b94cfca6c376403dbb3082af8e6b6f36d": "d6184dd18c7c8a08b91586586a95ef5b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2c974daa7a3bf1d70b0c0f7400015e772496fe": "57342efab3c92048950ea0cc831d2b41",
".git/objects/ee/74b4e75ad58038bde18dea7005f0830eed14ae": "908a18173b5b7cb942dbc2a26a3e737a",
".git/objects/f6/7051e507da15f7094edad8269b8f0d01499214": "8c5982566b8be31ce558493f7ed28a13",
".git/objects/fa/b2ad3f50e51522f7c4515cdc196d997a23ccef": "d45122db68e081a06ee2224ce6151aab",
".git/objects/fb/301e6748683651f73cf02f92c403b451e398e2": "7f3539bfd133d086fdd42b3d29b4d326",
".git/objects/fb/f21fda567ddd4990e4bb8b7280b1d578064837": "338a0a4b89a3c0ce702cae38ac47cbc7",
".git/objects/fc/eab5d4cb6ffcbf85f30776e316547b4767dfcd": "029da30eab18396cf506095320966cf4",
".git/objects/fd/065cf0d4c0df40c39ad0c1435aa697a154fb4a": "6f4eaee51f8073cac17b697c2550fdb1",
".git/objects/fe/4cde76b60c9f5605f1a2ed4bc990bf7f694cd5": "0bc9539e42f3458f0eaec0a9fc3365f1",
".git/objects/fe/848a21ba9c08b6e39cf10b2bd7fac248178618": "3630ca6e33705088317bd491bfe4901e",
".git/objects/pack/pack-e00d22111721b9e05b48cb6faab90cd2addc0c22.idx": "a239881e7ea854a3540dd2d3c92f1194",
".git/objects/pack/pack-e00d22111721b9e05b48cb6faab90cd2addc0c22.pack": "e18f7a61a58225d51f9b03756c7d2073",
".git/objects/pack/pack-e00d22111721b9e05b48cb6faab90cd2addc0c22.rev": "c732345d822a27a05b43704edeeba28e",
".git/ORIG_HEAD": "b072b319af11dfcd450987de8a659fdc",
".git/refs/heads/master": "e46ca9fd9f42e352fe37bb4f43daa314",
".git/refs/remotes/origin/main": "d4a83702b3b43d8eebf144752efb15df",
".git/refs/remotes/origin/master": "e46ca9fd9f42e352fe37bb4f43daa314",
"assets/asset/font/Ro.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/asset/icons/blockchain.png": "23f1a6e07adc3b39eed417ed2292d544",
"assets/asset/icons/brainstorm.png": "08f92eab75cea893fd5365a7cf3aaae9",
"assets/asset/icons/chat.png": "30d086b045379f73f390566c3766f6e9",
"assets/asset/icons/develop.png": "c5719d864587b679a7986a534d65239a",
"assets/asset/icons/explore.png": "85461ae51e6447f8e4d9893af5aec060",
"assets/asset/icons/fireside%2520(1).png": "58c05b7e956bc7698139e467c7406ede",
"assets/asset/icons/fireside.png": "e9a11291857726e2f421997ff499cde6",
"assets/asset/icons/kyc.png": "092e07c95715aa8708bc49b3d39237e2",
"assets/asset/icons/mine.png": "d1995b1edfb21d5d8aa20d27630aa135",
"assets/asset/icons/pi.png": "a72e0425df26bdfaa69691daed2b1120",
"assets/asset/icons/wallet.png": "42177fc2000190ae887b34a91e13bfe0",
"assets/asset/icons/wallet1.png": "aedff12888295d77fe6fe2cca93e3450",
"assets/AssetManifest.bin": "a072ec7208a0e72500af3083c8731c7b",
"assets/AssetManifest.json": "93aaee0110869e163db9a005981761c6",
"assets/FontManifest.json": "ed7fc76e507f5ad9b151586004d7a883",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "ff9fbb7d00f78dc90fb63e06fbe3601d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "e59597a33939261a24c22bef8fa88834",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52c4640b21313be7079d1ef6f9a6cd40",
"/": "52c4640b21313be7079d1ef6f9a6cd40",
"main.dart.js": "009122bd0b693ac017ea0c4210dd8f64",
"manifest.json": "d46fe3966d3bb4a402e17d5c3d378a5e",
"README.md": "301ca71e7004fa12860a0f5cc753f2a2",
"version.json": "1cf863402884e734583c15071a01b65b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
