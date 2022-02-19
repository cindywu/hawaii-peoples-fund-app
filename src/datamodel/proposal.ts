import type { ReadTransaction, WriteTransaction } from "replicache";
import { nanoid } from "nanoid";
import { z } from "zod";

export const proposalSchema = z.object({
  type: z.literal("proposal"),
  title: z.string(),
  content: z.string(),
});

export type Proposal = z.infer<typeof proposalSchema>;

export function putProposal(
  tx: WriteTransaction,
  { id, proposal }: { id: string; proposal: Proposal }
): Promise<void> {
  return tx.put(key(id), proposal);
}

function key(id: string): string {
  return `${proposalPrefix}${id}`;
}

export const proposalPrefix = "proposal-";

export function randomProposal() {
  return {
    id: nanoid(),
    proposal: {
      type: "proposal",
      title: "Title",
      content: "I am proposal."
    } as Proposal,
  };
}