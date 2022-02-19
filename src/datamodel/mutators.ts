import type { WriteTransaction } from 'replicache'
import {
  putProposal
} from './proposal'
import {
  initClientState
} from "./client-state";

export type M = typeof mutators

export const mutators = {
  createProposal: putProposal,
  initClientState,
  nop: async (_: WriteTransaction) => {},
};
