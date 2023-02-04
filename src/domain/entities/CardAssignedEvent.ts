import { Card } from './Card';

export type CardAssignedEvent = {
  repositoryName: Card['repositoryName'];
  cardNumber: Card['cardNumber'];
  assignedUsers: string[];
  assignedAt: Date;
};
