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
    let data = allTeams.filter(e => e.id === id);
    return data && data.length > 0 ? data[0] : undefined;
  },
  findAll(): Team[] {
    return allTeams;
  },
  findByNameMatch(text: string): Team[] {
    let data = allTeams.filter(e => e.name.toLowerCase() === text.toLowerCase());
    return data && data.length > 0 ? data : [];
  },
  add(team: Team): void {
    allTeams.push(team);
    return;
  },
  remove(id: number): void {
    allTeams.splice(allTeams.findIndex(e => e.id === id), 1);
    return;
  },
};
