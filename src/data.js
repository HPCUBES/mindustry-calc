calc .item ( {
	铜: {
		class: 1,
		aisle: "传送带",
		img: "img/item/铜.png"
	},
	铅: {
		class: 1,
		aisle: "传送带",
		img: "img/item/铅.png"
	},
	钛: {
		class: 1,
		aisle: "传送带",
		img: "img/item/钛.png"
	},
	钍: {
		class: 1,
		aisle: "传送带",
		img: "img/item/钍.png"
	},
	煤: {
		class: 1,
		aisle: "传送带",
		img: "img/item/煤炭.png"
	},
	沙: {
		class: 1,
		aisle: "传送带",
		img: "img/item/沙.png"
	},
	废料: {
		class: 1,
		aisle: "传送带",
		img: "img/item/废料.png"
	},
	石墨: {
		aisle: "传送带",
		img: "img/item/石墨.png"
	},
	硅: {
		aisle: "传送带",
		img: "img/item/硅.png"
	},
	相位物: {
		aisle: "传送带",
		img: "img/item/相位物.png"
	},
	孢子英: {
		aisle: "传送带",
		img: "img/item/孢子英.png"
	},
	硫: {
		aisle: "传送带",
		img: "img/item/硫.png"
	},
	爆炸混合物: {
		aisle: "传送带",
		img: "img/item/爆炸混合物.png"
	},
	钢化玻璃: {
		aisle: "传送带",
		img: "img/item/钢化玻璃.png"
	},
	塑钢: {
		aisle: "传送带",
		img: "img/item/塑钢.png"
	},
	巨浪合金: {
		aisle: "传送带",
		img: "img/item/巨浪合金.png"
	},
	水: {
		class: 2,
		aisle: "导管",
		img: "img/item/水.png"
	},
	石油: {
		class: 2,
		aisle: "导管",
		img: "img/item/石油.png"
	},
	矿渣: {
		aisle: "导管",
		img: "img/item/矿渣.png"
	},
	冷冻液: {
		aisle: "导管",
		img: "img/item/冷冻液.png"
	},
	液体: {
		class: 2,
		aisle: "导管",
		img: "img/item/液体.png",
		map: 2
	},
	矿物: {
		class: 1,
		aisle: "传送带",
		img: "img/item/矿物.png",
		map: 1
	},
	电: {
		class: 3,
		aisle: "电线",
		img: "img/item/电.png"
	},
	T1: {
		img: 'img/unit/T1.png'
	},
	T2: {
		img: 'img/unit/T2.png'
	},
	T3: {
		img: 'img/unit/T3.png'
	},
	T4: {
		img: 'img/unit/T4.png'
	},
	T5: {
		img: 'img/unit/T5.png'
	},
} )
calc .block ( {
	机械泵: {
		build: {
			铜:15,
			钢化玻璃:10
		},
		img: "img/block/机械泵.png",
		size: 1,
		use: {
			电: 0
		},
		out: {
			液体: 6.6
		},
		time: 1
	},
	
	
	旋转泵: {
		build: {
			铜:70,
			钢化玻璃:50,
			钛: 35,
			硅: 20
		},
		img: "img/block/旋转泵.png",
		size: 2,
		use: {
			电: 18
		},
		out: {
			液体: 48
		},
		time: 1
	},
	
	热能泵: {
		build: {
			铜:80,
			钢化玻璃:90,
			钛: 40,
			钍: 35,
			硅: 30
		},
		img: "img/block/热能泵.png",
		size: 3,
		use: {
			电: 78
		},
		out: {
			液体: 118.7
		},
		time: 1
	},
	
	机械钻头: {
		build: {
			铜: 12
		},
		size: 2,
		img: 'img/block/机械钻头.png',
		use: {
			水: 2
		},
		out: {
			矿物: 0.4 * 2.56
		}
	},

	气动钻头: {
		build: {
			铜: 18,
			石墨:10
		},
		size: 2,
		img: 'img/block/汽动钻头.png',
		use: {
			水: 3.6
		},
		out: {
			矿物: 0.6 * 2.56
		}
	},

	激光钻头: {
		build: {
			铜: 35,
			石墨:30,
			钛:20,
			硅:30
		},
		size: 3,
		img: 'img/block/激光钻头.png',
		use: {
			电: 66,
			水: 4.79
		},
		out: {
			矿物: 1.92 * 2.56
		}
	},

	抽水机: {
		build: {
			钢化玻璃:30,
			石墨:30,
			铅:30
		},
		size: 2,
		img: 'img/block/抽水机.png',
		use: {
			电: 90
		},
		out: {
			水: 6.6
		}
	},

	爆破钻头: {
		build: {
			铜: 65,
			钍:75,
			钛:50,
			硅:60
		},
		size: 4,
		img: 'img/block/爆破钻头.png',
		use: {
			水: 6,
			电: 180
		},
		out: {
			矿物: 3.42 * 3.23
		}
	},

	培养机: {
		build: {
			铜: 25,
			硅: 10,
			铅:25
		},
		size: 2,
		img: 'img/block/培养机.png',
		use: {
			电: 54,
			水:12*2.33
		},
		out: {
			孢子英: 1
		},
		time: 2.33
	},

	石油钻井: {
		build: {
			铜: 150,
			硅: 75,
			铅:115,
			石墨: 175,
			钍: 115
		},
		size: 3,
		img: 'img/block/培养机.png',
		use: {
			电: 180,
			沙: 1,
			水: 9
		},
		out: {
			石油: 15
		}
	},


	石墨压缩机: {
		build: {
			铜:75,
			铅: 30
		},
		img: "img/block/石墨压缩机.png",
		build: {
			铜: 75,
			铅: 30
		},
		size: 2,
		use: {
			煤: 2,
		},
		out: {
			石墨: 1
		},
		time: 1.5
	},
	多重压缩机: {
		img: "img/block/多重压缩机.png",
		build: {
			石墨: 50,
			铅: 100,
			钛: 100,
			硅: 25
		},
		size: 3,
		use: {
			煤: 3,
			水: 3,
			电: 108
		},
		out: {
			石墨: 2
		},
		time: 0.5
	},
	硅冶炼厂: {
		img: "img/block/硅冶炼厂.png",
		build: {
			铜: 30,
			铅: 25
		},
		size: 2,
		use: {
			煤: 1,
			沙: 2,
			电: 108
		},
		out: {
			硅: 1
		},
		time: 0.66
	},
	热能坩埚: {
		img: "img/block/热能坩埚.png",
		build: {
			钢化玻璃: 80,
			钛:120,
			硅:60,
			塑钢:35
		},
		size: 3,
		use: {
			煤: 4,
			沙: 6,
			硫:1,
			电: 240
		},
		out: {
			硅: 8
		},
		time: 1.5
	},
	窑炉: {
		img: "img/block/窑炉.png",
		build: {
			铜: 60,
			铅:30,
			石墨:30
		},
		size: 2,
		use: {
			铅:1,
			沙: 1,
			电: 36
		},
		out: {
			钢化玻璃: 1
		},
		time: 0.5
	},
	塑钢压缩机: {
		img: "img/block/塑钢压缩机.png",
		build: {
			铅:115,
			石墨:60,
			钛:80,
			硅:80
		},
		size: 2,
		use: {
			钛:2,
			石油:15,
			电: 180
		},
		out: {
			塑钢: 1
		},
		time: 1
	},
	相位物编织器: {
		img: "img/block/相位物编织器.png",
		build: {
			铅:120,
			钍: 70,
			硅:130
		},
		size: 2,
		use: {
			钍:4,
			沙:10,
			电: 300
		},
		out: {
			相位物: 1
		},
		time: 2
	},
	合金冶炼厂: {
		img: "img/block/合金冶炼厂.png",
		build: {
			铅:80,
			硅:80,
			钍: 70
		},
		size: 3,
		use: {
			铜:3,
			铅:4,
			钛:2,
			硅:3,
			电: 240*1.25
		},
		out: {
			巨浪合金:1
		},
		time: 1.25
	},
	冷冻液混合器: {
		img: "img/block/冷冻液混合器.png",
		build: {
			铅:65,
			钛:60,
			硅:40
		},
		size: 2,
		use: {
			钛:1,
			水:12*2,
			电:60
		},
		out: {
			冷冻液:12/(2)
		},
		time: 2
	},
	硫化物混合器: {
		img: "img/block/硫化物混合器.png",
		build: {
			铅:25,
			铜: 50
		},
		size: 2,
		use: {
			煤: 1,
			铅: 2,
			沙: 2,
			电:12
		},
		out: {
			硫: 1
		},
		time: 1.33
	},
	爆炸物混合器: {
		img: "img/block/爆炸物混合器.png",
		build: {
			铅:30,
			钛:20
		},
		size: 2,
		use: {
			孢子英: 1,
			硫: 1,
			电:24
		},
		out: {
			爆炸混合物: 1
		},
		time: 1.33
	},
	熔炉: {
		img: "img/block/熔炉.png",
		build: {
			铅:35,
			铜: 30,
			石墨: 45
		},
		size: 1,
		use: {
			废料: 1,
			电:60
		},
		out: {
			矿渣: 12 / ( 1 / 0.16 )
		},
		time: 0.16
	},
	孢子压缩机: {
		img: "img/block/孢子压缩机.png",
		build: {
			铅:35,
			硅: 30
		},
		size: 2,
		use: {
			孢子英: 1/0.33,
			电:42
		},
		out: {
			石油: 18 / ( 1 / 0.33  )
		},
		time: 0.33
	},
	T5单元: {
		img: "img/block/T5.png",
		build: {
			铅:4000,
			钍:1000,
			硅: 3000,
			塑钢: 600,
			相位物: 600,
			巨浪合金: 800
		},
		size: 9,
		use: {
			硅: 1000,
			塑钢: 600,
			巨浪合金: 500,
			相位物:350,
			冷冻液: 180*240,
			T4: 1,
			电: 1500
		},
		out: {
			T5: 1
		},
		time: 240
	},
	T4单元: {
		img: "img/block/T4.png",
		build: {
			铅:2000,
			钍:750,
			硅: 1000,
			塑钢: 450,
			相位物: 600
		},
		size: 7,
		use: {
			硅: 850,
			塑钢: 650,
			钛:750,
			冷冻液: 60*90,
			T3: 1,
			电: 780
		},
		out: {
			T4: 1
		},
		time: 90
	},
	T3单元: {
		img: "img/block/T3.png",
		build: {
			铅:650,
			钛: 300,
			钍:650,
			硅: 450
		},
		size: 5,
		use: {
			电: 360,
			硅: 130,
			钛:80,
			钢化玻璃: 40,
			T2: 1
		},
		out: {
			T3: 1
		},
		time: 30
	},
	T2单元: {
		img: "img/block/T2.png",
		build: {
			铜:200,
			铅:120,
			硅: 90
		},
		size: 3,
		use: {
			硅: 40,
			石墨: 40,
			T1: 1,
			电: 180
		},
		out: {
			T2: 1
		},
		time: 10
	}
} )