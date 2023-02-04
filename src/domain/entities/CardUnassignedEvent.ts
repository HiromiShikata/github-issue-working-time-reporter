import { Card } from './Card';

export type CardUnassignedEvent = {
  repositoryName: Card['repositoryName'];
  cardNumber: Card['cardNumber'];
  unassignedUsers: string[];
  unassignedAt: Date;
};
