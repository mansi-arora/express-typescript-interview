// properly implement this controller function using the appropriate types
import { Team, TeamService } from "../../services/team.service";
import { Request, Response } from "express";

export async function getTeams(req: Request, res: Response, next: any) {
    try {
        const data: Team[] = await TeamService.findAll();
        res.status(200).json(data);
    } catch (err: any) {
        next(err);
    }
}

export async function getTeamById(req: Request, res: Response, next: any) {
    try {
        let id = req.params.id;
        const data = await TeamService.findById(id);
        res.status(200).json(data);
    } catch (err: any) {
        next(err);
    }
}

export async function getTeamByName(req: Request, res: Response, next: any) {
    try {
        let name = req.params.name;
        const data: Team[] = await TeamService.findByNameMatch(name);
        res.status(200).json(data && data.length > 0 ? data[0] : {});
    } catch (err: any) {
        next(err);
    }
}

export async function createTeam(req: Request, res: Response, next: any) {
    try {
        const data:Team = req.body.data;
        const result = await TeamService.add(data);
        res.status(200).json(result);
    } catch (err: any) {
        next(err);
    }
}

export async function deleteTeam(req: Request, res: Response, next: any) {
    try {
        let id = req.params.id;
        const result = await TeamService.remove(id);
        res.status(200).json(result);
    } catch (err: any) {
        next(err);
    }
}
