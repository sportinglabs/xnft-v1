/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link Treasury}
 * @category Accounts
 * @category generated
 */
export type TreasuryArgs = {
  bump: number
  rewardMint: web3.PublicKey
  poolCount: beet.bignum
}

export const treasuryDiscriminator = [238, 239, 123, 238, 89, 1, 168, 253]
/**
 * Holds the data for the {@link Treasury} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Treasury implements TreasuryArgs {
  private constructor(
    readonly bump: number,
    readonly rewardMint: web3.PublicKey,
    readonly poolCount: beet.bignum
  ) {}

  /**
   * Creates a {@link Treasury} instance from the provided args.
   */
  static fromArgs(args: TreasuryArgs) {
    return new Treasury(args.bump, args.rewardMint, args.poolCount)
  }

  /**
   * Deserializes the {@link Treasury} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Treasury, number] {
    return Treasury.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Treasury} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Treasury> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Treasury account at ${address}`)
    }
    return Treasury.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '654kE3ccD76txX3nrP8Q2FTxjD82qk6XrcoJZYZ1cess'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, treasuryBeet)
  }

  /**
   * Deserializes the {@link Treasury} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Treasury, number] {
    return treasuryBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Treasury} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return treasuryBeet.serialize({
      accountDiscriminator: treasuryDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Treasury}
   */
  static get byteSize() {
    return treasuryBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Treasury} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Treasury.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Treasury} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Treasury.byteSize
  }

  /**
   * Returns a readable version of {@link Treasury} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bump: this.bump,
      rewardMint: this.rewardMint.toBase58(),
      poolCount: (() => {
        const x = <{ toNumber: () => number }>this.poolCount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const treasuryBeet = new beet.BeetStruct<
  Treasury,
  TreasuryArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['rewardMint', beetSolana.publicKey],
    ['poolCount', beet.u64],
  ],
  Treasury.fromArgs,
  'Treasury'
)
