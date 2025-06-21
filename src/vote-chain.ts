import {
  CandidateCreated as CandidateCreatedEvent,
  ElectionCreated as ElectionCreatedEvent,
  ElectionEnded as ElectionEndedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent,
  VoteSubmitted as VoteSubmittedEvent
} from "../generated/VoteChain/VoteChain"
import {
  CandidateCreated,
  ElectionCreated,
  ElectionEnded,
  OwnershipTransferred,
  Paused,
  Unpaused,
  VoteSubmitted
} from "../generated/schema"
import { Bytes } from "@graphprotocol/graph-ts"

export function handleCandidateCreated(event: CandidateCreatedEvent): void {
  let entity = new CandidateCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.electionId = event.params.electionId
  entity.candidateId = event.params.candidateId
  entity.name = event.params.name
  entity.description = event.params.description

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleElectionCreated(event: ElectionCreatedEvent): void {
  let entity = new ElectionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.internal_id = event.params.id
  entity.creator = event.params.creator
  entity.name = event.params.name
  entity.description = event.params.description
  entity.image = event.params.image
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleElectionEnded(event: ElectionEndedEvent): void {
  let entity = new ElectionEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.electionId = event.params.electionId
  entity.totalVotes = event.params.totalVotes
  entity.winner = event.params.winner
  entity.winnerVoteCount = event.params.winnerVoteCount
  entity.results = changetype<Bytes[]>(event.params.results)

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteSubmitted(event: VoteSubmittedEvent): void {
  let entity = new VoteSubmitted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.electionId = event.params.electionId
  entity.voter_address = event.params.voter_address
  entity.candidateId = event.params.candidateId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
