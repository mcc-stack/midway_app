import { Provide, Inject } from '@midwayjs/decorator';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '_@midwayjs_orm@1.3.1@@midwayjs/orm';
import { Context } from '../../typings/app';
import { IUserOptions } from '../interface';
import { Order } from '../entity/Order';

@Provide()
export class UserService {
  @Inject()
  ctx: Context;
  @InjectEntityModel(Order)
  photoModel: Repository<Order>;
  async getUser(options: IUserOptions) {
    let allOrder = await this.photoModel.find({ id: '12' });
    this.ctx.logger.info(allOrder);
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
      userOrder: allOrder,
    };
  }
}
