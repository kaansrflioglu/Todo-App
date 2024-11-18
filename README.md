# Todo Uygulaması Backend ve Frontend
Bu proje, React ile oluşturulmuş bir ön yüz ve Spring Boot ile desteklenen bir arka uç içerir. MySQL veritabanı kullanılarak, kullanıcıların görevlerini (todo) ekleyebilecekleri ve işlerini tamamladıktan sonra eklenen todoyu tamamlandı olarak işaretleyebilecekleri bir yapılacaklar listesi uygulamasıdır.

## Projede Kullanılan Teknolojiler
* Frontend: React
* Backend: Java, Spring Boot
* Veritabanı: MySQL
* ORM: JPA (Hibernate)
* Proje Yönetimi: Maven

## Uygulama Hakkında
Bu uygulama, kullanıcıların yapılacaklar listesi oluşturmasını ve tamamlanma durumunu yönetmesini sağlar. Kullanıcı dostu arayüz ve güçlü bir backend ile görevlerin takibini kolaylaştırır.

## Özellikler:
* Yeni görev eklenebilir.
* Bir görevin tamamlanma durumu değiştirilebilir. Tamamlanan görevler ekran üzerinden silinir veritabanından silinmez.
* Görev tamamlanma durumu değiştirildiğinde veya değiştirme işlemi iptal edildiğinde kullanıcıya bildirim gösterilir.

## Backend Kurulumu ve Kullanımı

**Gereksinimler**
Sisteminizde Java kurulu olmalıdır.  
`java -version`  

Projeyi derlemek ve bağımlılıkları yönetmek için Maven gereklidir.  
`mvn -version`  

Veritabanı olarak MySQL kullanılır. MySQL üzerinde bir veritabanı oluşturun ve `application.properties` dosyasını buna göre düzenleyin.

**Kurulum**  
**1-** Proje dizinine gidin:  
`cd /path/to/your/todo-backend`  

**2-** Maven ile projeyi derleyin ve JAR dosyası oluşturun:  
`mvn clean package`  

**3-** Oluşturulan JAR dosyasını çalıştırın:  
`cd target`  
`java -jar todoapp-0.0.1-SNAPSHOT.jar`

## Frontend Kurulumu ve Kullanımı
**Gereksinimler**  

React uygulamasını çalıştırmak için Node.js ve npm kurulu olmalıdır.  
`node -v`  
`npm -v`

**Kurulum**  
**1-** Proje dizinine gidin:  
`cd /path/to/your/todo-frontend`

**2-** Gerekli bağımlılıkları yükleyin:  
`npm install`

**3-** React uygulamasını başlatın:  
`npm start`