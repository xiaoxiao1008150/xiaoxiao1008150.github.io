---
layout: post
title:  "Python type"
date:   2016-12-27 14:39:51 +0800
categories: jekyll update
---
### python type

```
  if name in counts:
      print counts[name]
  else :
      print 0
      
  print counts.get(name,0)
```

### change list to dic
```
counts = dict()
names = ["cui","cesr","wu","ren"]

for name in names:
    if name not in counts:
        counts[name] = 1
    else:
      counts[name] = counts[name] + 1
print counts
```
相当于

```
counts = dict()
names = ["cui","cesr","wu","ren"]

for name in names:
    counts[name]=counts.get(name,0) + 1
print counts    
```

### change dic to list

```
dict = {'name':1,'title':30,'num':90}

print list(dict)
>>>['name','title','num']

print dict.key()
>>>['name','title','num']

print dict.values()
>>>[1,30,90]

print dict.items()
>>>[('name',1)('title',30)('num',90)]


for aa,bb in dict.items()
    print aa,bb

```

### python interview

* glob
list comprehension
generator

* pip freeze > requirement.txt

* pip install -r  requirement.txt



















