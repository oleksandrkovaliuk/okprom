from numpy import random

products = []

types = ['guard-press', 'regular', 'sale-guard-press']

imgs = ['sg-007.png', 'sg-008.png', 'S2-3.png']

run = True
index = 1
while run:
    random_num = random.randint(3)
    random_price = random.randint(10000)
    img_name = imgs[random_num].split('.')[0]

    products.append({
        'id': index,
        'type': types[random_num],
        'name': f"{img_name} Автоматический мини",
        'img': f"./img/{img_name}.png",
        'weightDiscription': "16кг",
        'engineDiscription': "190Вт",
        'diametrDiscription': "от 3 до 35мм",
        'price': random_price,
        'currency': '₽',
        'discount': random_price * 0.30,
        'avgPerfomance': "свыше 500кг"
    })

    if index == 100:
        run = False

    index += 1

print(products)
