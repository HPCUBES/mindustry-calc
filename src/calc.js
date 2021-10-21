let calc = {}

calc.items = {}
calc.blocks = {}
calc.aisles = {}
calc.task = null
calc.maps = {}
calc.item = function (obj) {
	for (let i in obj) {
		obj[i].type = 'item'
		obj[i].name = i
		calc.items[i] = obj[i]
	}
	calc.setmap(obj)
}
calc.block = function (obj) {
	for (let i in obj) {
		if (!obj[i].time) {
			obj[i].time = 1
		}
		if(obj[i].use){
			if(obj[i].use.电) obj[i].use.电 *= obj[i].time
		}
		obj[i].type = 'block'
		obj[i].name = i
		calc.blocks[i] = obj[i]
	}
	calc.setmap(obj)
}
calc.aisle = function (obj) {
	for (let i in obj) {
		obj[i].type = 'aisle'
		obj[i].name = i
		calc.aisles[i] = obj[i]
	}
	calc.setmap(obj)
}
calc.addtochose = function (id, ida, t) {
	//alert(JSON.stringify(calc))
	let ob = $(ida)
	let dv = []
	let st = false
	let idt
	//遍历物品表
	let iter = {}
	for (let i in calc.items) {
		iter[i] = (calc.items[i])
	}
	for (let i in calc.blocks) {
		iter[i] = (calc.blocks[i])
	}
	for (let i in iter) {
		let v = iter[i]
		let dm = $(`<div class="button ok ui">${i} <img class="icon ui ok" src="${v.img}"></div>`)
		dv.push(dm)
		dm.css({
			border: "0.5px solid white"
		})
		//task赋值
		dm.click(function () {
			for (let j in t) {
				if (t[j].id !== idt) {
					continue
				}
				let vals = t[j].call(v)
				if (vals != false) {
					//console.log(t,j)
					$(t[j].id).html(`${i} <img class="icon" src="${v.img}">`)
				}

				break
			}
			calc.task = i
		})
	}
	calc.copysum(3, '<div class="ui three buttons"></div>', dv, function (d) {
		ob.append(d)
	})
	//console.log(t)
	for (let i in t) {
		$(t[i].id).click(function () {
			$(id).modal('show')
			//console.log(i)
			idt = t[i].id
		})
	}
}
//方块效率计算
calc.calc = function (id, val, time) {
	if (!time) {
		time = 1
	}
	try {
		time = eval(time) + 0
		if (time == NaN) {
			time = 1
		}
	} catch (e) {
		time = 1
	}
	if (val.type !== 'block') {
		console.log('not block calc')
		return
	}
	let obj = $(` <div class="ui list"></div>`)
	obj.append(`<h1 class='ui top attached  header'>建造花费</h1>`)
	let c1 = []
	for (let i in val.build) {
		//console.log(i,calc.findimg(i))
		c1.push($(`<div class="ui button icon left" style="color:white;border:0.5px solid white">
		${i} 
		<img class="ui icon" src="${calc.findimg(i)}"> ${val.build[i]}
	  </div>
	` ))
	}
	calc.copysum(3, '<div class="ui three buttons"></div>', c1, function (d) {
		obj.append(d)
	})

	obj.append(`<h1 class='ui top attached  header'>消耗物品${time}min</h1>`)

	let c2 = []
	for (let i in val.use) {
		c2.push($(`<div class="ui button icon left" style="color:white;border:0.5px solid white">
		${i}
		<img class="ui icon" src="${calc.findimg(i)}"> ${val.use[i] * 60 * time / val.time}
	  </div>
	` ))
		calc.copysum(3, '<div class="ui three buttons"></div>', c2, function (d) {
			obj.append(d)
		})
	}

	let c3 = []
	obj.append(`<h1 class='ui top attached  header'>生产${time}min</h1>`)
	for (let i in val.out) {
		c3.push($(`<div class="ui button icon left" style="color:white;border:0.5px solid white">
		${i}
		<img class="ui icon" src="${calc.findimg(i)}"> ${val.out[i] * 60 * time / val.time}
	  </div>
	` ))
	}
	calc.copysum(3, '<div class="ui three buttons"></div>', c3, function (d) {
		obj.append(d)
	})








	$(id).html(obj)
}
calc.setmap = function (d) {
	for (let i in d) {
		if (d[i].map) {
			calc.maps[i] = d[i]
		}
	}
}
calc.ismap = function (j) {
	let json = []
	for (let i in calc.maps) {
		if (j[i]) {
			json.push(calc.maps[i])
		}
	}
	return json
}
calc.findout = function (name) {
	//获取映射的物品
	let ob = []
	let str = calc.find(name)
	let map = false
	if (!str) return
	//console.log(str)
	if (str.class) {
		map = str.class
	}
	for (let i in calc.blocks) {
		let v = calc.blocks[i]
		if (v.out) {
			//console.log(v.out)
			let p = false
			let maps = calc.ismap(v.out)
			for (let i in maps) {
				if (maps[i].map == map) {
					v.maplen = v.out[maps[i].name]
					ob.push(v)
					p = true
					break
				}
			}
			if (v.out[name] && p == false) {
				ob.push(v)
			}
		}
	}
	return ob
}




calc.find = function (name) {
	for (let i in calc.items) {
		if (i == name) {
			return calc.items[i]
		}
	}
	for (let i in calc.blocks) {
		if (i == name) {
			return calc.blocks[i]
		}
	}
	for (let i in calc.aisles) {
		if (i == name) {
			return calc.aisles[i]
		}
	}
}
//生成重复的横排节点
calc.copysum = function (max, node, childs, call) {
	let ind = 0
	let ob
	for (let i in childs) {
		if (ind == 0) {
			ob = $(node)
			call(ob)
		}
		ind++
		if (ind >= max) {
			ind = 0
		}
		ob.append(childs[i])
	}
}
calc.findimg = function (name) {
	let str = calc.find(name)
	if (str) {
		return str.img
	}
}

//img
calc.initmap = function (id, data) {
	let d
	//console.log(kmsjsmap)
	if (!data) {
		d = {
			container: id,
			data: [
				{
					id: '0',
					isroot: true,
					topic: `<div class="ui button icon">Root <img class="icon " src="img/base/void.png"></div>`,
					direction: "right",
					expanded: true
				},
				{
					parentid: 'root',
					topic: 'test',
					id: 1
				}
			],
			editable: false,
			onRelation: function (d) {

			}
		}
	}
	else {
		d = {
			container: id,
			data,
			editable: false,
			onRelation: function (d) {

			}
		}
	}
	//console.log(d)
	kmsjsmap.init(d)
}
calc.main = function (id, item, t, id1, emod) {
	if (!(typeof t === 'number')) {
		try {
			t = eval(t)
			//console.log(typeof t)
			if (!(typeof t === 'number')) {
				t = 100
			}
		} catch (e) {
			t = 100
		}
	}
	try {
		//console.log('ytime:'+t)
		//console.log(id, item, t)
		let all = {}
		let data = [
			{
				id: '1',
				isroot: true,
				topic: `<div class="ui button icon">生成链 <img class="${calc.findimg(item)}"></div>`,
				direction: "right",
				expanded: true
			}
		]
		//递归求解
		let sul = {}
		let rec = function (name, fat, lc) {
			fat[name] = {}
			//返回所有机器
			let ob = calc.findout(name)
			//console.log(ob)
			let vs = []
			for (let i in ob) {
				//console.log(lc,ob[i])
				let co0 = lc / ((ob[i].out[name] ? ob[i].out[name] : ob[i].maplen)) / 60 * ob[i].time
				let co = Math.round(co0 - 0.5) + 1
				vs.push({
					data: co,
					v: ob[i],
					d: co0
				})
			}
			//最少的
			if (!vs.length) {
				return
			}
			vs.sort(function (a, b) {
				return a.data - b.data
			})
			let V = vs[0].v
			let C = vs[0].data
			let T = vs[0].d
			let D = fat[name]
			//赋值
			D.mac = V.name
			D.macimg = V.img
			D.count = C
			D.child = {}
			D.req = lc
			D.name = name
			D.电 = 0
			D.build = V.build
			D.img = calc.findimg(name)
			//物品递归
			for (let i in V.use) {
				if (i == '电') {
					D.电 += V.use[i] * D.count * 60 / V .time
					if (!emod) continue
				}
				rec(i, D.child, V.use[i] * 60 / V.time * T)
			}
		}
		rec(item, sul, t)
		//将数据转换思维导图
		all.item = {}
		all.req = {}
		all.build = {}
		all.block = {}
		let rl = function (d, ld, nd) {
			//叠加
			let l = 1
			if (d.电) {
				if (!all.req.电) all.req.电 = 0
				all.req.电 += d.电
			}
			if (d.req) {
				if (!all.item[d.name]) all.item[d.name] = 0
				all.item[d.name] += d.req
			}
			if (d.mac) {
				if (!all.block[d.mac]) all.block[d.mac] = 0
				all.block[d.mac] += d.count
				//console.log(d)
				for ( let j in d .build ) {
					if ( ! all .build [ j ] ) all .build [j] = 0
					all .build [j] += d .build [j] * d .count
				}
			}
			//扁平数据
			if (d.req) {
				//物品
				data.push({
					topic: `<div class="ui button icon">${d.name + " " + Math.round(d.req)}/min <img class="ui icon" src="${d.img}"></div>`,
					parentid: '' + (ld),
					id: '' + (nd + l)
				})
				if (!d.mac) {
					return
				}
				l++
				//所需方块
				data.push({
					topic: `<div class="ui button icon">${d.mac + " " + Math.round(d.count)}个 <img class="ui icon" src="${d.macimg}"></div>`,
					parentid: '' + (nd + l - 1),
					id: '' + (nd + l)
				})
			}

			if (d.child) {
				let I = 0
				for (let i in d.child) {
					I += Math.random() + 1
					rl(d.child[i], nd + l, I * 100 + ld + l)
				}
			}
		}
		rl({ child: sul }, -50, 0)
		console.log(all)
		//console.log(sul, data)
		kmsjsmap.isInit = false
		$('#' + id).html('')
		//console.log(data)
		delete kmsjsmap.option
		calc.initmap(id, data)
		//列表化
		let O = $(id1)
		O.html('')
		O.append($(`<div class="ui header top attached">方块列表</div>`))



		let c1 = []
		for (let i in all.block) {
			//console.log(i,calc.findimg(i))
			c1.push($(`<div class="ui button icon left" style="color:white;border:0.5px solid white">${i} ${all.block[i]}个 <img class="ui icon" src="${calc.findimg(i)}"></div>
	` ))
		}
		calc.copysum(3, '<div class="ui three buttons"></div>', c1, function (d) {
			O.append(d)
		})


		O.append($(`<div class="ui header top attached">建造花费</div>`))


		c1 = []
		for (let i in all.build) {
			//console.log(i,calc.findimg(i))
			c1.push($(`<div class="ui button icon left" style="color:white;border:0.5px solid white">${i} ${all.build[i]}个 <img class="ui icon" src="${calc.findimg(i)}"></div>
	` ))
		}
		calc.copysum(3, '<div class="ui three buttons"></div>', c1, function (d) {
			O.append(d)
		})

		O.append($(`<div class="ui header top attached">消耗</div>`))

		c1 = []
		for (let i in all.item) {
			if ( i == item ) continue
			//console.log(i,calc.findimg(i))
			c1.push($(`<div class="ui button icon left" style="color:white;border:0.5px solid white">${i} ${Math.round(all.item[i]/60)}/s <img class="ui icon" src="${calc.findimg(i)}"></div>
	` ))
		}
		for (let i in all.req) {
			if ( i == item ) continue
			//console.log(i,calc.findimg(i))
			c1.push($(`<div class="ui button icon left" style="color:white;border:0.5px solid white">${i} ${Math.round(all.req[i]/60)}/s <img class="ui icon" src="${calc.findimg(i)}"></div>
	` ))
		}

		calc.copysum(3, '<div class="ui three buttons"></div>', c1, function (d) {
			O.append(d)
		})


		$("#" + id).parent().find('.button').css({
			color: 'white',
			borderRadius: '0px'
		})
	} catch (e) {
		console.log(e)
	}
}
