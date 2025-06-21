import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CandidateCreated,
  ElectionCreated,
  ElectionEnded,
  OwnershipTransferred,
  Paused,
  Unpaused,
  VoteSubmitted
} from "../generated/VoteChain/VoteChain"

export function createCandidateCreatedEvent(
  electionId: BigInt,
  candidateId: BigInt,
  name: string,
  description: string
): CandidateCreated {
  let candidateCreatedEvent = changetype<CandidateCreated>(newMockEvent())

  candidateCreatedEvent.parameters = new Array()

  candidateCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "electionId",
      ethereum.Value.fromUnsignedBigInt(electionId)
    )
  )
  candidateCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "candidateId",
      ethereum.Value.fromUnsignedBigInt(candidateId)
    )
  )
  candidateCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  candidateCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return candidateCreatedEvent
}

export function createElectionCreatedEvent(
  id: BigInt,
  creator: Address,
  name: string,
  description: string,
  image: string,
  deadline: BigInt
): ElectionCreated {
  let electionCreatedEvent = changetype<ElectionCreated>(newMockEvent())

  electionCreatedEvent.parameters = new Array()

  electionCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  electionCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  electionCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  electionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  electionCreatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )
  electionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return electionCreatedEvent
}

export function createElectionEndedEvent(
  electionId: BigInt,
  totalVotes: BigInt,
  winner: string,
  winnerVoteCount: BigInt,
  results: Array<ethereum.Tuple>
): ElectionEnded {
  let electionEndedEvent = changetype<ElectionEnded>(newMockEvent())

  electionEndedEvent.parameters = new Array()

  electionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "electionId",
      ethereum.Value.fromUnsignedBigInt(electionId)
    )
  )
  electionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "totalVotes",
      ethereum.Value.fromUnsignedBigInt(totalVotes)
    )
  )
  electionEndedEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromString(winner))
  )
  electionEndedEvent.parameters.push(
    new ethereum.EventParam(
      "winnerVoteCount",
      ethereum.Value.fromUnsignedBigInt(winnerVoteCount)
    )
  )
  electionEndedEvent.parameters.push(
    new ethereum.EventParam("results", ethereum.Value.fromTupleArray(results))
  )

  return electionEndedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createVoteSubmittedEvent(
  electionId: BigInt,
  voter_address: Address,
  candidateId: BigInt
): VoteSubmitted {
  let voteSubmittedEvent = changetype<VoteSubmitted>(newMockEvent())

  voteSubmittedEvent.parameters = new Array()

  voteSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "electionId",
      ethereum.Value.fromUnsignedBigInt(electionId)
    )
  )
  voteSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "voter_address",
      ethereum.Value.fromAddress(voter_address)
    )
  )
  voteSubmittedEvent.parameters.push(
    new ethereum.EventParam(
      "candidateId",
      ethereum.Value.fromUnsignedBigInt(candidateId)
    )
  )

  return voteSubmittedEvent
}
