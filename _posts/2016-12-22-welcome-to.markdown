---
layout: post
title:  "Python sqlalchemy"
date:   2016-12-22 14:39:51 +0800
categories: jekyll update
---

### install 

* from sqlalchemy import *
* from sqlalchemy.ext.declarative import declarative_base
* from sqlalchemy.orm import relation, sessionmaker
* Base = declarative_base()

<!-- from sqlalchemy import Column,Integer,Numeric,String -->

```
class Cookie(Base):
    __tablename__ = 'cookies'
    cookie_id = Column(Integer,primary_key=True)

    cookie_name = Column(String(50),index=True)
    cookie_recipe_url = Column(String(255))
    cookie_sku = Column(String(55))
    quantity = Column(Integer())
    unit_cost = Column(Numeric(12,2))

engine = create_engine("mysql+pymysql://root:@localhost:3306/test",echo=True)
Session = sessionmaker(bind=engine)
session = Session()
Base.metadata.create_all(engine)

```

### insert data

```
cc_cookie = Cookie(cookie_name = 'chocolate chip',
                    cookie_recipe_url = 'http://www.baidu',
                    cookie_sku = 'CC01',
                    quantity = 12,
                    unit_cost = 0.50
                    )

session.add(cc_cookie)
```

### must transfer data

```
session.commit()
```


### bulk insert difference

```
c1 = Cookie(cookie_name = 'manner',
                    cookie_recipe_url = 'http://www.baidu',
                    cookie_sku = 'CC01',
                    quantity = 22,
                    unit_cost = 0.50
                    )

c2 = Cookie(cookie_name = 'berry',
                    cookie_recipe_url = 'http://www.baidu',
                    cookie_sku = 'CC01',
                    quantity = 22,
                    unit_cost = 1.5
                    )

session.bulk_save_objects([c1,c2])
session.commit()
```

### query


1.cookies = session.query(Cookie).all()
2.User.query.get(1)————获取第一个对象
3.User.query.get(1).name __获取对象的属性
4.filter:User.query.filter(id>0).all
>注意：query过滤函数

>filter,filter_by,limit,offset,order_by,group_by

5.query执行函数
```
all(),first(),get(),count(),first_or_404,get_or_404,paginate()
```
### first row
```
print(session.query(Cookie.cookie_name,Cookie.quantity).first())
```
### order by

```
for cookie in session.query(Cookie).order_by(Cookie.quantity):
    print('{}-{}'.format(cookie.quantity,cookie.cookie_name))

```
### decending

```
from sqlalchemy import desc

for cookie in session.query(Cookie).order_by(desc(Cookie.quantity)):
    print('{}-{}'.format(cookie.quantity,cookie.cookie_name))
```

### limiting

```
query = session.query(Cookie).order_by(Cookie.quantity).limit(2)
print([result.cookie_name for result in query])
```

### functions

```
from sqlalchemy import func

inv_count = session.query(func.sum(Cookie.quantity)).scalar()
print(inv_count)
```

### function count

```
rec_count = session.query(func.count(Cookie.cookie_name)).first()
print(rec_count)

```

###labeling

```
rec_count = session.query(func.count(Cookie.cookie_name) \
                            .lable('inventory_count')).first()
print(rec_count.keys())
print(rec_count.inventory_count)
```
### filter_by

```
record = sessopn
with engine.connect() as con:
    rs = con.execute('SELECT 5')
    data = rs.fetchone()[0]
    print "Data: %s" % data
```

### update
```
find reset session.add session.commit

test = session.query(MenuItem).filter_by(id=5).one()

test.price = '$20'
session.add(test)
session.commit()
```
###delete

```
find session.delete session.commit
test1 = session.query(MenuItem).filter_by(name='Veggie Burger').first()
session.delete(test1)
session.commit()

```

###用哪种DB API与数据库对话

```
<!-- engine = create_engine('mysql//user:pwd@host/dbname') -->
engine=create_engine("mysql+pymysql://root:@localhost:3306/test",echo=True)

<!-- create_engine("数据库类型+数据库驱动://数据库用户名:数据库密码@IP地址:端口/数据库"，其他参数)
上文当中echo=True是开启调试，这样当我们执行文件的时候会提示相应的文字。 -->
Base.metadata.create_all(engine)

```

### 协议

1. TCP-Transmission Control Protocal
2. UDP- User Datagram Protocal
3. IP - Internet Protocal
4. Http - Hypertext Transfer Protocal

### http code 

```
def main():
    server = HTTPServer('',8000,Test)
    print "server is runnint on port 8000..."
    server.serve_forever()

if __name__ == '__main__':
    main()
````



















































UserD