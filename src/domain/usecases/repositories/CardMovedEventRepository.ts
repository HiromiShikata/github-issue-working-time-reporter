import { CardMovedEvent } from '../../entities/CardMovedEvent';
import { Card } from '../../entities/Card';

export default interface CardMovedEventRepository {
  findByNumber(card: Card): Promise<CardMovedEvent[]>;
}
