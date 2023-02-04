import { Card } from './Card';

export type CardMovedEvent = {
  repositoryName: Card['repositoryName'];
  cardNumber: Card['cardNumber'];
  columnNameTo: string;
  changedAt: Date;
};
