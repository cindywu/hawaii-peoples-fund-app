import type { Replicache } from "replicache";
import { useSubscribe } from "replicache-react";
import type { mutators } from "./mutators";
import { getClientState, clientStatePrefix } from "./client-state";
import { proposalPrefix } from './proposal'

export function getProposals(rep: Replicache<typeof mutators>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSubscribe(
    rep,
    async(tx) => {
      const proposals = await tx.scan({ prefix: proposalPrefix }).entries().toArray()
      return proposals
    },
    []
  )
}

export function useCollaboratorIDs(rep: Replicache<typeof mutators>) {
  return useSubscribe(
    rep,
    async (tx) => {
      const clientIDs = await tx
        .scan({ prefix: clientStatePrefix })
        .keys()
        .toArray();
      const myClientID = await rep.clientID;
      return clientIDs
        .filter((k) => !k.endsWith(myClientID))
        .map((k) => k.substr(clientStatePrefix.length));
    },
    []
  );
}

export function useClientInfo(
  rep: Replicache<typeof mutators>,
  clientID: string
) {
  return useSubscribe(
    rep,
    async (tx) => {
      return await getClientState(tx, clientID);
    },
    null
  );
}
