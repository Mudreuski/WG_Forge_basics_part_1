/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    for (var i = 0; i < this.memory.length; i++) {
      if (this.memory[i].key === key) {
          return i;
      }
    }
    
    return -1;
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    if (this.hashKey(key) > -1) {
      return this.memory[this.hashKey(key)].value;
    }
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    if (this.hashKey(key) !== -1) {
      return this.get(key);
    }

    return this.memory.push({'key': key, 'value': value});
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    return this.memory.splice(this.hashKey(key), 1);
  }
}
