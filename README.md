# Laravel + VueJs + Docker

# Installation 
## Docker Setup
 
1. Clone the project

```bash
$ git clone https://github.com/Rafat97/laravel-vue-sample-project
```

2. Go to the project directory

```bash
$ cd laravel-vue-sample-project
```

3. Run docker-compose file

```bash
$ docker-compose up -d --build
```

4. First time you need to wait 5-10min. Because for the database initialization

5. Go to this URL for laravel project

```bash
 http://localhost:9081/
```

6. Go to this URL for phpmyadmin. [username: root]

```bash
 http://localhost:6601/
```




## Manual Approch
 
1. Clone the project

```bash
$ git clone https://github.com/Rafat97/laravel-vue-sample-project
```

2. Go to the project directory

```bash
$ cd laravel-vue-sample-project
```



3. Create a `.env` file. And add your database information. Ex:

```bash
APP_DEBUG=true


DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=6603
DB_DATABASE=testapp_db
DB_USERNAME=root
DB_PASSWORD=
```

4. Run the composer 

```bash
composer install
```

5. Run the migration command

```bash
php artisan migrate
```

6. Run the stroage link command

```bash
php artisan stroage:link
```

7. Run the stroage link command

```bash
php artisan storage:link
```

8. Start the server

```bash
php artisan serve
```

8. Go to this URL

```bash
 http://localhost:8000/
```

# Sample output screenshot

## Page 1 

![image info](./public/img/page_1.png)

## Page 2

![image info](./public/img/page_2.png)

## Page 3

![image info](./public/img/page_3.png)

# Contributed

| |  |
| ----------- | ----------- |
| ![Emdadul Haque Rafat](https://rafat97.github.io/static/c3688eb99d1fef50023a121e3abc5fa6/e8044/my-image.jpg)      | `Name:` Emdadul Haque <br /><br /> `Email:` rafathaque1997@gmail.com <br /><br /> `Website :` https://rafat97.github.io/ <br /><br />`Github:` https://github.com/Rafat97 <br /><br /> `Linkedin:` https://www.linkedin.com/in/emdadul-haque-173131139/   <br /><br /> `Project Info:` https://gist.github.com/Rafat97/f4d0053b26106c03d89fa1ae014cbaa4  |
