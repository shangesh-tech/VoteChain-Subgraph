import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CandidateCreated } from "../generated/schema"
import { CandidateCreated as CandidateCreatedEvent } from "../generated/VoteChain/VoteChain"
import { handleCandidateCreated } from "../src/vote-chain"
import { createCandidateCreatedEvent } from "./vote-chain-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let electionId = BigInt.fromI32(234)
    let candidateId = BigInt.fromI32(234)
    let name = "Example string value"
    let description = "Example string value"
    let newCandidateCreatedEvent = createCandidateCreatedEvent(
      electionId,
      candidateId,
      name,
      description
    )
    handleCandidateCreated(newCandidateCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("CandidateCreated created and stored", () => {
    assert.entityCount("CandidateCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CandidateCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "electionId",
      "234"
    )
    assert.fieldEquals(
      "CandidateCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "candidateId",
      "234"
    )
    assert.fieldEquals(
      "CandidateCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "CandidateCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
