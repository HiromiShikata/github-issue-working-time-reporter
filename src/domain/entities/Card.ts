export type Card = {
  repositoryName: string; // {org or user}/{repository}
  cardNumber: number; // issue or pr number
  title: string;
  openedAt: Date;
  closedAt: Date | null;
};
