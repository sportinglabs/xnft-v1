/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category ReturnReceiptMint
 * @category generated
 */
export const returnReceiptMintStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ReturnReceiptMintInstructionArgs'
)
/**
 * Accounts required by the _returnReceiptMint_ instruction
 *
 * @property [] stakeEntry
 * @property [_writable_] receiptMint
 * @property [_writable_] tokenManager
 * @property [_writable_] tokenManagerTokenAccount
 * @property [_writable_] userReceiptMintTokenAccount
 * @property [_writable_, **signer**] user
 * @property [_writable_] collector
 * @property [] tokenManagerProgram
 * @category Instructions
 * @category ReturnReceiptMint
 * @category generated
 */
export type ReturnReceiptMintInstructionAccounts = {
  stakeEntry: web3.PublicKey
  receiptMint: web3.PublicKey
  tokenManager: web3.PublicKey
  tokenManagerTokenAccount: web3.PublicKey
  userReceiptMintTokenAccount: web3.PublicKey
  user: web3.PublicKey
  collector: web3.PublicKey
  tokenProgram?: web3.PublicKey
  tokenManagerProgram: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const returnReceiptMintInstructionDiscriminator = [
  212, 255, 150, 20, 230, 229, 32, 201,
]

/**
 * Creates a _ReturnReceiptMint_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ReturnReceiptMint
 * @category generated
 */
export function createReturnReceiptMintInstruction(
  accounts: ReturnReceiptMintInstructionAccounts,
  programId = new web3.PublicKey('654kE3ccD76txX3nrP8Q2FTxjD82qk6XrcoJZYZ1cess')
) {
  const [data] = returnReceiptMintStruct.serialize({
    instructionDiscriminator: returnReceiptMintInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.stakeEntry,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.receiptMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenManager,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenManagerTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.userReceiptMintTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.user,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.collector,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenManagerProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
