/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type RequestRandomnessParams = {
  permissionBump: number
  switchboardStateBump: number
  bump: number
}

/**
 * @category userTypes
 * @category generated
 */
export const requestRandomnessParamsBeet =
  new beet.BeetArgsStruct<RequestRandomnessParams>(
    [
      ['permissionBump', beet.u8],
      ['switchboardStateBump', beet.u8],
      ['bump', beet.u8],
    ],
    'RequestRandomnessParams'
  )
