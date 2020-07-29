

new Vue({
    el:"#app",
    data:{
        arr:[],
        speed:1
    },

    methods:{

        newarr: function(){
            this.arr = [];
            for(i=0; i< 20; i++){
                this.arr.push(Math.floor(Math.random() * 46)  + 6 )
            }
        },

        swap: function(no1,no2){
            const hello = this.arr[no1]
            Vue.set(this.arr, no1, this.arr[no2])
            Vue.set(this.arr, no2, hello) 
        },

        sleep: function(ms){
            return new Promise((resolve) => setTimeout(resolve, ms))
        },

        bubblesort: async function(){
            console.log("hello")
            let sorted = false;
            for(d=0; d < this.arr.length; d++){
                sorted = true
                for(i=0; i < this.arr.length - 1; i++){
                    await this.sleep(this.speed)
                    const j = i + 1; 
                    if(this.arr[i] > this.arr[j]){
                        sorted = false
                        this.swap(i, j);
                    }
                }
                if(sorted){
                    break;
                }
            }
        },

        insertionsort: async function(){
            for(i=1; i < this.arr.length; i++){
                await this.sleep(this.speed)
                for(h=i; h > 0; h--){
                  if(this.arr[h] < this.arr[h - 1]){
                    this.swap(h, h-1)
                  }
                }
          
               }
        },

        merge:function(left, rigth){
            let sortedarr = [];
            
            while(left.length && rigth.length){
                if(left[0] <= rigth[0]){
                    sortedarr.push(left.shift());
                }else{
                    sortedarr.push(rigth.shift());
                }
            }
        
            while(rigth.length) sortedarr.push(rigth.shift())
            while(left.length) sortedarr.push(left.shift())
            return sortedarr;
            
        },

        mergesort:function(arr){
            if(arr.length < 2){
        
                return arr;
            }
            const middle = Math.floor(arr.length / 2);
            let leftside = arr.slice(0, middle);
            let rigthside = arr.slice(middle, arr.length)
        
            
            return this.merge(this.mergesort(leftside),this.mergesort(rigthside) )
        },

        callmergesort:function(){
        
            this.arr = this.mergesort(this.arr)
            
            
        },

      
    },

  

    mounted:function(){
        this.newarr()
        
    }
})

