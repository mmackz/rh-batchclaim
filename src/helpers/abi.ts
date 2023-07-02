const abi = [
   { inputs: [], stateMutability: "nonpayable", type: "constructor" },
   { inputs: [], name: "AlreadyClaimed", type: "error" },
   { inputs: [], name: "AmountExceedsBalance", type: "error" },
   { inputs: [], name: "ClaimWindowNotStarted", type: "error" },
   { inputs: [], name: "EndTimeInPast", type: "error" },
   { inputs: [], name: "EndTimeLessThanOrEqualToStartTime", type: "error" },
   { inputs: [], name: "MustImplementInChild", type: "error" },
   { inputs: [], name: "NoTokensToClaim", type: "error" },
   { inputs: [], name: "NoWithdrawDuringClaim", type: "error" },
   { inputs: [], name: "NotStarted", type: "error" },
   { inputs: [], name: "TotalAmountExceedsBalance", type: "error" },
   {
      anonymous: false,
      inputs: [
         { indexed: true, internalType: "address", name: "account", type: "address" },
         {
            indexed: false,
            internalType: "address",
            name: "rewardAddress",
            type: "address"
         },
         { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
      ],
      name: "Claimed",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "uint8", name: "version", type: "uint8" }],
      name: "Initialized",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [{ indexed: false, internalType: "string", name: "cid", type: "string" }],
      name: "JsonSpecCIDSet",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [
         {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address"
         },
         { indexed: true, internalType: "address", name: "newOwner", type: "address" }
      ],
      name: "OwnershipTransferred",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [
         { indexed: false, internalType: "address", name: "account", type: "address" }
      ],
      name: "Paused",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [
         { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" }
      ],
      name: "Queued",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [
         { indexed: false, internalType: "address", name: "account", type: "address" }
      ],
      name: "Unpaused",
      type: "event"
   },
   {
      inputs: [],
      name: "claim",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "endTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "getRewardAmount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "getRewardToken",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "hasWithdrawn",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [
         { internalType: "address", name: "rewardTokenAddress_", type: "address" },
         { internalType: "uint256", name: "endTime_", type: "uint256" },
         { internalType: "uint256", name: "startTime_", type: "uint256" },
         { internalType: "uint256", name: "totalParticipants_", type: "uint256" },
         { internalType: "uint256", name: "rewardAmountInWei_", type: "uint256" },
         { internalType: "string", name: "questId_", type: "string" },
         { internalType: "address", name: "receiptContractAddress_", type: "address" },
         { internalType: "uint16", name: "questFee_", type: "uint16" },
         { internalType: "address", name: "protocolFeeRecipient_", type: "address" }
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [{ internalType: "uint256", name: "tokenId_", type: "uint256" }],
      name: "isClaimed",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "jsonSpecCID",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "maxProtocolReward",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "maxTotalRewards",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "paused",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "protocolFee",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "protocolFeeRecipient",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "questFactoryContract",
      outputs: [{ internalType: "contract QuestFactory", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "questFee",
      outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "questId",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "queue",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "queued",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "rabbitHoleReceiptContract",
      outputs: [{ internalType: "contract RabbitHoleReceipt", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "receiptRedeemers",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "redeemedTokens",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [{ internalType: "address", name: "erc20Address_", type: "address" }],
      name: "refund",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "rewardAmountInWei",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "rewardToken",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [{ internalType: "string", name: "jsonSpecCID_", type: "string" }],
      name: "setJsonSpecCID",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "startTime",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "totalParticipants",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "totalTransferAmount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "unPause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "withdrawRemainingTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   }
];

export default abi;
