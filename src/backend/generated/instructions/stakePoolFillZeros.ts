/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category StakePoolFillZeros
 * @category generated
 */
export const stakePoolFillZerosStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'StakePoolFillZerosInstructionArgs'
)
/**
 * Accounts required by the _stakePoolFillZeros_ instruction
 *
 * @property [_writable_] stakePool
 * @category Instructions
 * @category StakePoolFillZeros
 * @category generated
 */
export type StakePoolFillZerosInstructionAccounts = {
  stakePool: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const stakePoolFillZerosInstructionDiscriminator = [
  58, 49, 81, 150, 111, 131, 44, 51,
]

/**
 * Creates a _StakePoolFillZeros_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category StakePoolFillZeros
 * @category generated
 */
export function createStakePoolFillZerosInstruction(
  accounts: StakePoolFillZerosInstructionAccounts,
  programId = new web3.PublicKey('654kE3ccD76txX3nrP8Q2FTxjD82qk6XrcoJZYZ1cess')
) {
  const [data] = stakePoolFillZerosStruct.serialize({
    instructionDiscriminator: stakePoolFillZerosInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.stakePool,
      isWritable: true,
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
