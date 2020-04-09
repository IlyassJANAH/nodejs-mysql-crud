# Node.js, Express & MySQL: Simple Add, Edit, Delete, View (CRUD)
Node.js, Express &amp; MySQL: Simple Add, Edit, Delete, View (CRUD)

### creating database and table

```
create database nodejsmysql;

use test;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `age` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
```
