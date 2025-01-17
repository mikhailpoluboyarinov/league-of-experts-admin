import { Prediction, PredictionNoExtra } from "../../index";
import { PredictionId } from "../../index";
import { UserId } from "../../../User";
import { MatchId } from "../../../Match";

export const predictions: Prediction[] = [
  {
    id: 1 as PredictionId,
    userId: 1 as UserId,
    matchId: 1 as MatchId,
    type: "group",
    hostScore: 2,
    guestScore: 1,
  },
  {
    id: 2 as PredictionId,
    userId: 2 as UserId,
    matchId: 1 as MatchId,
    type: "group",
    hostScore: 3,
    guestScore: 1,
  },
  {
    id: 3 as PredictionId,
    userId: 3 as UserId,
    matchId: 1 as MatchId,
    type: "group",
    hostScore: 2,
    guestScore: 4,
  },
  {
    id: 4 as PredictionId,
    userId: 1 as UserId,
    matchId: 2 as MatchId,
    type: "group",
    hostScore: 2,
    guestScore: 3,
  },
  {
    id: 5 as PredictionId,
    userId: 2 as UserId,
    matchId: 2 as MatchId,
    type: "group",
    hostScore: 1,
    guestScore: 3,
  },
  {
    id: 6 as PredictionId,
    userId: 3 as UserId,
    matchId: 2 as MatchId,
    type: "group",
    hostScore: 2,
    guestScore: 4,
  },
  {
    id: 7 as PredictionId,
    userId: 1 as UserId,
    matchId: 3 as MatchId,
    type: "group",
    hostScore: 1,
    guestScore: 5,
  },
  {
    id: 8 as PredictionId,
    userId: 2 as UserId,
    matchId: 3 as MatchId,
    type: "group",
    hostScore: 6,
    guestScore: 6,
  },
  {
    id: 9 as PredictionId,
    userId: 3 as UserId,
    matchId: 3 as MatchId,
    type: "group",
    hostScore: 1,
    guestScore: 4,
  },
  {
    id: 10 as PredictionId,
    userId: 1 as UserId,
    matchId: 4 as MatchId,
    type: "play_off",
    hostScore: 1,
    guestScore: 1,
    extra: {
      type: "extra_time",
      hostScoreExtra: 3,
      guestScoreExtra: 1,
    },
  },
  {
    id: 11 as PredictionId,
    userId: 2 as UserId,
    matchId: 4 as MatchId,
    type: "play_off",
    hostScore: 6,
    guestScore: 6,
    extra: {
      type: "extra_time",
      hostScoreExtra: 2,
      guestScoreExtra: 1,
    },
  },
  {
    id: 12 as PredictionId,
    userId: 3 as UserId,
    matchId: 4 as MatchId,
    type: "play_off",
    hostScore: 1,
    guestScore: 4,
    extra: {
      type: "extra_time",
      hostScoreExtra: 2,
      guestScoreExtra: 1,
    },
  },
  {
    id: 13 as PredictionId,
    userId: 1 as UserId,
    matchId: 5 as MatchId,
    type: "play_off",
    hostScore: 5,
    guestScore: 5,
    extra: {
      type: "extra_time",
      hostScoreExtra: 2,
      guestScoreExtra: 1,
    },
  },
  {
    id: 14 as PredictionId,
    userId: 2 as UserId,
    matchId: 5 as MatchId,
    type: "play_off",
    hostScore: 1,
    guestScore: 6,
    extra: {
      type: "extra_time",
      hostScoreExtra: 2,
      guestScoreExtra: 1,
    },
  },
  {
    id: 15 as PredictionId,
    userId: 3 as UserId,
    matchId: 5 as MatchId,
    type: "play_off",
    hostScore: 1,
    guestScore: 4,
    extra: {
      type: "extra_time",
      hostScoreExtra: 2,
      guestScoreExtra: 1,
    },
  },
];
