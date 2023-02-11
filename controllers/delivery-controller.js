
import { DeliveryModel } from '../models/delivery.js';
export const createDelivery = async (req, res) => {
  try {
    const doc = new DeliveryModel({
      address: req.body.address,
      phone: req.body.phone,
    });

    await doc.save();

    return res.status(200).json({ message: 'Заказ создан' });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать заказ',
    });
  }
};

export const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await DeliveryModel.find();

    return res.json(deliveries);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить заказы',
    });
  }
};

export const getOneDelivery = async (req, res) => {
  try {
    const id = req.params.id;
    const delivery = await DeliveryModel.findById(id);

    return res.json(delivery);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить заказ',
    });
  }
};

export const getWorkerDeliveries = async (req, res) => {
  try {
    const workerId = req.params.id;
    const deliveries = await DeliveryModel.find({ worker: workerId });

    return res.json(deliveries);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить заказы',
    });
  }
};

export const deleteDelivery = async (req, res) => {
  try {
    const deliveryId = req.params.id;
    await DeliveryModel.findByIdAndDelete(deliveryId);

    return res.status(200).json({
      message: 'Заказ удален',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось удалить заказ',
    });
  }
};

export const updateDelivery = async (req, res) => {
  try {
    const deliveryId = req.params.id;

    await DeliveryModel.findByIdAndUpdate(deliveryId, {
      address: req.body.address,
      phone: req.body.phone,
      status: req.body.status,
      worker: req.body.worker,
    });

    return res.status(200).json({ message: 'Заказ обновлен' });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось обновить заказ',
    });
  }
};
