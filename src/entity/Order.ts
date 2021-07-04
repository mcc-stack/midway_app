import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryColumn } from 'typeorm';

@EntityModel('oms_order')
export class Order {
  @PrimaryColumn()
  id: string;

  @Column({
    length: 100,
  })
  member_id: string;

  @Column()
  coupon_id: string;

  @Column('date')
  create_time: string;
}
