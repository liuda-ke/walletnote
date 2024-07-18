const options = [
  {
    value: "基本生活消费",
    label: "基本生活消费",
    children: [
      {
        value: "食品", label: "食品"
      },
      {
        value: "住房", label: "住房"
      },
      {
        value: "交通", label: "交通"
      },
      {
        value: "通讯", label: "通讯"
      },
      {
        value: "医疗", label: "医疗"
      },
      {
        value: "水电煤", label: "水电煤"
      },
    ],
  },
  {
    value: "非基本生活消费",
    label: "非基本生活消费",
    children: [
      {
        value: "休闲娱乐", label: "休闲娱乐"
      },
      {
        value: "教育", label: "教育"
      },
      {
        value: "旅游", label: "旅游"
      },
      {
        value: "文化", label: "文化"
      },
      {
        value: "体育", label: "体育"
      },
    ],
  },
  {
    value: "投资消费",
    label: "投资消费",
    children: [
      {
        value: "股票", label: "股票"
      },
      {
        value: "基金", label: "基金"
      },
      {
        value: "债券", label: "债券"
      },
      {
        value: "房地产", label: "房地产"
      },
    ],
  },
  {
    value: "公共服务消费",
    label: "公共服务消费",
    children: [
      {
        value: "公共服务设施", label: "公共服务设施"
      },
      {
        value: "公共服务项目", label: "公共服务项目"
      },
    ],
  },
  {
    value: "人情消费",
    label: "人情消费",
    children: [
      {
        value: "礼金", label: "礼金"
      },
      {
        value: "红包", label: "红包"
      },
      {
        value: "礼品", label: "礼品"
      },
    ],
  },
  {
    value: "教育",
    label: "教育",
    children: [
      {
        value: "学费", label: "学费"
      },
      {
        value: "教材费", label: "教材费"
      },
      {
        value: "辅导费", label: "辅导费"
      },
    ],
  },
  {
    value: "医疗",
    label: "医疗",
    children: [
      {
        value: "药品费", label: "药品费"
      },
      {
        value: "检查费", label: "检查费"
      },
      {
        value: "治疗费", label: "治疗费"
      },
    ],
  },
  {
    value: "旅游",
    label: "旅游",
    children: [
      {
        value: "机票", label: "机票"
      },
      {
        value: "酒店", label: "酒店"
      },
      {
        value: "景点门票", label: "景点门票"
      },
    ],
  },
  {
    value: "家居",
    label: "家居",
    children: [
      {
        value: "家具", label: "家具"
      },
      {
        value: "家电", label: "家电"
      },
      {
        value: "装修", label: "装修"
      },
    ],
  },
  {
    value: "汽车",
    label: "汽车",
    children: [
      {
        value: "购车", label: "购车"
      },
      {
        value: "加油", label: "加油"
      },
      {
        value: "维修", label: "维修"
      },
    ],
  },
  {
    value: "健身",
    label: "健身",
    children: [
      {
        value: "健身器材", label: "健身器材"
      },
      {
        value: "健身课程", label: "健身课程"
      },
    ],
  },
  {
    value: "美容",
    label: "美容",
    children: [
      {
        value: "化妆品", label: "化妆品"
      },
      {
        value: "美容服务", label: "美容服务"
      },
    ],
  },
  {
    value: "运动",
    label: "运动",
    children: [
      {
        value: "运动鞋", label: "运动鞋"
      },
      {
        value: "运动器材", label: "运动器材"
      },
    ],
  },
  {
    value: "宠物",
    label: "宠物",
    children: [
      {
        value: "宠物食品", label: "宠物食品"
      },
      {
        value: "宠物用品", label: "宠物用品"
      },
    ],
  },
  {
    value: "摄影",
    label: "摄影",
    children: [
      {
        value: "摄影器材", label: "摄影器材"
      },
      {
        value: "摄影服务", label: "摄影服务"
      },
    ],
  },
  {
    value: "通讯",
    label: "通讯",
    children: [
      {
        value: "话费", label: "话费"
      },
      {
        value: "流量费", label: "流量费"
      },
    ],
  },
  {
    value: "交通",
    label: "交通",
    children: [
      {
        value: "公共交通", label: "公共交通"
      },
      {
        value: "出租车", label: "出租车"
      },
    ],
  },
  {
    value: "水电煤",
    label: "水电煤",
    children: [
      {
        value: "水费", label: "水费"
      },
      {
        value: "电费", label: "电费"
      },
      {
        value: "煤气费", label: "煤气费"
      },
    ],
  },
  {
    value: "衣物",
    label: "衣物",
    children: [
      {
        value: "衣服", label: "衣服"
      },
      {
        value: "鞋帽", label: "鞋帽"
      },
    ],
  },
  {
    value: "化妆品",
    label: "化妆品",
    children: [
      {
        value: "护肤品", label: "护肤品"
      },
      {
        value: "彩妆", label: "彩妆"
      },
    ],
  },
  {
    value: "家具",
    label: "家具",
    children: [
      {
        value: "沙发", label: "沙发"
      },
      {
        value: "床", label: "床"
      },
    ],
  },
  {
    value: "家电",
    label: "家电",
    children: [
      {
        value: "电视", label: "电视"
      },
      {
        value: "冰箱", label: "冰箱"
      },
    ],
  },
  {
    value: "电子产品",
    label: "电子产品",
    children: [
      {
        value: "手机", label: "手机"
      },
      {
        value: "电脑", label: "电脑"
      },
    ],
  },
  {
    value: "健身器材",
    label: "健身器材",
    children: [
      {
        value: "哑铃", label: "哑铃"
      },
      {
        value: "跑步机", label: "跑步机"
      },
    ],
  },
  {
    value: "宠物食品",
    label: "宠物食品",
    children: [
      {
        value: "狗粮", label: "狗粮"
      },
      {
        value: "猫粮", label: "猫粮"
      },
    ],
  },
  {
    value: "摄影器材",
    label: "摄影器材",
    children: [
      {
        value: "相机", label: "相机"
      },
      {
        value: "镜头", label: "镜头"
      },
    ],
  },
  {
    value: "图书",
    label: "图书",
    children: [
      {
        value: "纸质书", label: "纸质书"
      },
      {
        value: "电子书", label: "电子书"
      },
    ],
  },
  {
    value: "电影",
    label: "电影",
    children: [
      {
        value: "电影票", label: "电影票"
      },
      {
        value: "在线电影", label: "在线电影"
      },
    ],
  },
  {
    value: "音乐",
    label: "音乐",
    children: [
      {
        value: "CD", label: "CD"
      },
      {
        value: "在线音乐", label: "在线音乐"
      },
    ],
  },
  {
    value: "游戏",
    label: "游戏",
    children: [
      {
        value: "游戏卡", label: "游戏卡"
      },
      {
        value: "在线游戏", label: "在线游戏"
      },
    ],
  },
  {
    value: "健身课程",
    label: "健身课程",
    children: [
      {
        value: "瑜伽", label: "瑜伽"
      },
      {
        value: "游泳", label: "游泳"
      },
    ],
  },
  {
    value: "美容服务",
    label: "美容服务",
    children: [
      {
        value: "美甲", label: "美甲"
      },
      {
        value: "美容护肤", label: "美容护肤"
      },
    ],
  },
  {
    value: "运动鞋",
    label: "运动鞋",
    children: [
      {
        value: "跑步鞋", label: "跑步鞋"
      },
      {
        value: "篮球鞋", label: "篮球鞋"
      },
    ],
  },
  {
    value: "运动器材",
    label: "运动器材",
    children: [
      {
        value: "篮球", label: "篮球"
      },
      {
        value: "足球", label: "足球"
      },
    ],
  },
  {
    value: "宠物用品",
    label: "宠物用品",
    children: [
      {
        value: "宠物玩具", label: "宠物玩具"
      },
      {
        value: "宠物医疗用品", label: "宠物医疗用品"
      },
    ],
  },
  {
    value: "摄影服务",
    label: "摄影服务",
    children: [
      {
        value: "摄影服务", label: "摄影服务"
      },
      {
        value: "后期处理", label: "后期处理"
      },
    ],
  },
  {
    value: "通讯服务",
    label: "通讯服务",
    children: [
      {
        value: "电话服务", label: "电话服务"
      },
      {
        value: "短信服务", label: "短信服务"
      },
    ],
  },
  {
    value: "交通服务",
    label: "交通服务",
    children: [
      {
        value: "公共交通服务", label: "公共交通服务"
      },
      {
        value: "出租车服务", label: "出租车服务"
      },
    ],
  },
  {
    value: "水电煤服务",
    label: "水电煤服务",
    children: [
      {
        value: "水电煤服务", label: "水电煤服务"
      },
      {
        value: "维修服务", label: "维修服务"
      },
    ],
  },
  {
    value: "衣物租赁",
    label: "衣物租赁",
    children: [
      {
        value: "衣服租赁", label: "衣服租赁"
      },
      {
        value: "鞋帽租赁", label: "鞋帽租赁"
      },
    ],
  },
  {
    value: "化妆品租赁",
    label: "化妆品租赁",
    children: [
      {
        value: "护肤品租赁", label: "护肤品租赁"
      },
      {
        value: "彩妆租赁", label: "彩妆租赁"
      },
    ],
  },
  {
    value: "家具租赁",
    label: "家具租赁",
    children: [
      {
        value: "沙发租赁", label: "沙发租赁"
      },
      {
        value: "床租赁", label: "床租赁"
      },
    ],
  },
  {
    value: "家电租赁",
    label: "家电租赁",
    children: [
      {
        value: "电视租赁", label: "电视租赁"
      },
      {
        value: "冰箱租赁", label: "冰箱租赁"
      },
    ],
  },
  {
    value: "电子产品租赁",
    label: "电子产品租赁",
    children: [
      {
        value: "手机租赁", label: "手机租赁"
      },
      {
        value: "电脑租赁", label: "电脑租赁"
      },
    ],
  },
  {
    value: "健身器材租赁",
    label: "健身器材租赁",
    children: [
      {
        value: "哑铃租赁", label: "哑铃租赁"
      },
      {
        value: "跑步机租赁", label: "跑步机租赁"
      },
    ],
  },
  {
    value: "宠物用品租赁",
    label: "宠物用品租赁",
    children: [
      {
        value: "宠物玩具租赁", label: "宠物玩具租赁"
      },
      {
        value: "宠物医疗用品租赁", label: "宠物医疗用品租赁"
      },
    ],
  },
  {
    value: "摄影器材租赁",
    label: "摄影器材租赁",
    children: [
      {
        value: "相机租赁", label: "相机租赁"
      },
      {
        value: "镜头租赁", label: "镜头租赁"
      },
    ],
  },
  {
    value: "图书租赁",
    label: "图书租赁",
    children: [
      {
        value: "纸质书租赁", label: "纸质书租赁"
      },
      {
        value: "电子书租赁", label: "电子书租赁"
      },
    ],
  },
  {
    value: "电影租赁",
    label: "电影租赁",
    children: [
      {
        value: "电影票租赁", label: "电影票租赁"
      },
      {
        value: "在线电影租赁", label: "在线电影租赁"
      },
    ],
  },
  {
    value: "音乐租赁",
    label: "音乐租赁",
    children: [
      {
        value: "CD租赁", label: "CD租赁"
      },
      {
        value: "在线音乐租赁", label: "在线音乐租赁"
      },
    ],
  },
  {
    value: "游戏租赁",
    label: "游戏租赁",
    children: [
      {
        value: "游戏卡租赁", label: "游戏卡租赁"
      },
      {
        value: "在线游戏租赁", label: "在线游戏租赁"
      },
    ],
  },
  {
    value: "健身课程租赁",
    label: "健身课程租赁",
    children: [
      {
        value: "瑜伽租赁", label: "瑜伽租赁"
      },
      {
        value: "游泳租赁", label: "游泳租赁"
      },
    ],
  },
  {
    value: "美容服务租赁",
    label: "美容服务租赁",
    children: [
      {
        value: "美甲租赁", label: "美甲租赁"
      },
      {
        value: "美容护肤租赁", label: "美容护肤租赁"
      },
    ],
  },
  {
    value: "运动鞋租赁",
    label: "运动鞋租赁",
    children: [
      {
        value: "跑步鞋租赁", label: "跑步鞋租赁"
      },
      {
        value: "篮球鞋租赁", label: "篮球鞋租赁"
      },
    ],
  },
  {
    value: "运动器材租赁",
    label: "运动器材租赁",
    children: [
      {
        value: "篮球租赁", label: "篮球租赁"
      },
      {
        value: "足球租赁", label: "足球租赁"
      },
    ],
  },
  {
    value: "摄影服务租赁",
    label: "摄影服务租赁",
    children: [
      {
        value: "摄影服务租赁", label: "摄影服务租赁"
      },
      {
        value: "后期处理租赁", label: "后期处理租赁"
      },
    ],
  },
  {
    value: "通讯服务租赁",
    label: "通讯服务租赁",
    children: [
      {
        value: "电话服务租赁", label: "电话服务租赁"
      },
      {
        value: "短信服务租赁", label: "短信服务租赁"
      },
    ],
  },
  {
    value: "交通服务租赁",
    label: "交通服务租赁",
    children: [
      {
        value: "公共交通服务租赁", label: "公共交通服务租赁"
      },
      {
        value: "出租车服务租赁", label: "出租车服务租赁"
      },
    ],
  },
  {
    value: "水电煤服务租赁",
    label: "水电煤服务租赁",
    children: [
      {
        value: "水电煤服务租赁", label: "水电煤服务租赁"
      },
      {
        value: "维修服务租赁", label: "维修服务租赁"
      },
    ],
  },
]

export default options;