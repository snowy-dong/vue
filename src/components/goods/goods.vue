<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="item in goods" class="menu-item">
					<span class="text border-1px">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span> {{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWrapper">
			<ul>
				<li v-for="item in goods" class="food-list food-list-hook">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li v-for="food in item.foods" class="food-item border-1px">
							<div class="icon">
								<img width="57" height="57" src="" :src="food.icon" alt="">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售{{food.sellCount}}份</span>
									<span>好评率{{food.rating}}</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span>
									<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"
export default {
	name: 'goods',
	props: {
		seller: {
			type: Object
		}
	},
	data() {
		return {
			goods: [],
			listHeight: [],
			scrollY: 0
		}
	},
	created() {
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		this.$http.get("/api/goods").then(res => {
			this.goods = res.data;
			console.log(this.goods)
			this.$nextTick(() => {
				this._initScroll()
				this._calculatHeight()
			})

		}, err => {

		})
	},
	methods: {
		_initScroll() {
			this.meunScroll = new BScroll(this.$refs.menuWrapper, {
				click: true
			});
			this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
				click: true,
				probeType: 3
			});
			this.foodsScroll.on("scroll", (pos) => {
				this.scrollY = Math.abs(Math.round(pos.y))
			})
		},
		_calculatHeight() {
			let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
			let height = 0;
			this.listHeight.push(height);
			for (let i = 0; i < foodList.lenght; i++) {
				let item = foodList[i];
				height += item.clientHeight;
				this.listHeight.push(height);
			}
		}
	},
	computed: {
		currentIndex() {
			for (let i = 0; i < this.listHeight.length; i++) {
				let height1 = this.listHeight[i];
				let height2 = this.listHeight[i + 1];
				if (!height2 || (this.scrollY > height1 && this.scrollY < height2)) {
					return i
				}
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl";
  @import "./stylus/goods.styl";
</style>
