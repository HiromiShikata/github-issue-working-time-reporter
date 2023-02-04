import { Card } from '../../entities/Card';

export default interface CardRepository {
  findByCardNumber(
    repositoryName: Card['repositoryName'],
    cardNumber: Card['cardNumber'],
  ): Promise<Card | null>;
}
