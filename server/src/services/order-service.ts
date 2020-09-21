import Order, { IOrder } from "../models/order"
import Guid from "guid"

export default class OrderService {
    async createOrder(customerId, customerOrder) {
        const order = new Order({
            plNumber: customerOrder,
            customerId: customerId,
            orderId: Guid.raw()
        })
        return order.save()
    }

}