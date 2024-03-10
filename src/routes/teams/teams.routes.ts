import express from "express";
import { getTeams, getTeamById, getTeamByName, createTeam, deleteTeam } from "./teams.controller";
export const TeamRouter = express.Router();

// add proper REST endpoints to support Team crud operations

TeamRouter.get('/', getTeams);
TeamRouter.get('/:id', getTeamById);
TeamRouter.get('/:name', getTeamByName)
TeamRouter.post('/', createTeam);
TeamRouter.delete('/:id', deleteTeam);
