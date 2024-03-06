export type Team = {
  id: number;
  name: string;
};
export const allTeams: Team[] = [
  { id: 1, name: "team 1" },
  { id: 2, name: "team 2" },
  { id: 3, name: "team 3" },
  { id: 4, name: "team 4" },
  { id: 5, name: "team 5" },
  { id: 6, name: "team 6" },
  { id: 7, name: "team 7" },
];
export const TeamService = {
  findById(id: number): Team | undefined {
    return;
  },
  findAll(): Team[] {
    return [];
  },
  findByNameMatch(text: string): Team[] {
    return [];
  },
  add(team: Team): void {},
  remove(id: number): void {},
};
