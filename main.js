new Vue({
  el: "#app",
  data: {
    arr: [],
    low: 0,
    high: 0,
    speed: 10,
    counter: 0,
  },

  methods: {
    newarr: function () {
      this.arr = [];
      this.low = 0;
      this.high = 20;
      for (i = this.low; i < this.high; i++) {
        this.arr.push(Math.floor(Math.random() * 46) + 6);
      }
    },

    swap: function (no1, no2) {
      const hello = this.arr[no1];
      Vue.set(this.arr, no1, this.arr[no2]);
      Vue.set(this.arr, no2, hello);
    },

    sleep: function (ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    bubblesort: async function () {
      console.log("hello");
      let sorted = false;
      for (d = 0; d < this.arr.length; d++) {
        sorted = true;
        for (i = 0; i < this.arr.length - 1; i++) {
          await this.sleep(this.speed);
          const j = i + 1;
          if (this.arr[i] > this.arr[j]) {
            sorted = false;
            this.swap(i, j);
          }
        }
        if (sorted) {
          break;
        }
      }
    },

    insertionsort: async function () {
      for (i = 1; i < this.arr.length; i++) {
        for (h = i; h > 0; h--) {
          if (this.arr[h] < this.arr[h - 1]) {
            this.swap(h, h - 1);
          }
        }
      }
    },

    merge: async function (low, mid, high) {
      let temp = new Array(high).fill(0);

      let i = low;
      let j = mid + 1;
      let k = low;
      //   await this.sleep(this.speed);

      while (i <= mid && j <= high) {
        if (this.arr[i] < this.arr[j]) {
          temp[k++] = this.arr[i++];
        } else {
          temp[k++] = this.arr[j++];
        }
      }

      for (; i <= mid; i++) temp[k++] = this.arr[i];
      for (; j <= high; j++) temp[k++] = this.arr[j];

      for (i = low; i <= high; i++) {
        await this.sleep(this.speed);
        Vue.set(this.arr, i, temp[i]);
      }
    },

    mergesort: async function (low, high) {
      let mid;
      if (low < high) {
        this.counter += 1;
        console.log(this.counter);
        console.log();
        mid = Math.floor((low + high) / 2);

        await this.mergesort(low, mid);
        await this.mergesort(mid + 1, high);

        await this.merge(low, mid, high);
      }
    },

    callmergesort: async function () {
      console.log("Before: ");
      console.log(this.arr);

      await this.mergesort(this.low, this.high - 1);

      console.log("After: ");
      console.log(this.arr);
    },
  },

  mounted: function () {
    this.newarr();
  },
});
