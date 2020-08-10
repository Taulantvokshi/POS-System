PayDay is a modern POS system, that monitors all of your store orders, transactions, and employees.
By accessing and using a very simple jet sophisticated UI, employees, and the managers can conduct their order of business with ease.

As per any POS system, PayDay offers the same capabilities when it comes to process and maintain the orders that already are one queue. You can edit and delete orders that are already in the queue as long the order cancellation policy is on the time frame. For posting and retrieving data I used Postgress because the nature of the data is very relational. And to synchronize the state I used Redux on the front-end.

PayDay offers a settings dashboard where the owner or the authorized personnel can add products, remove products, also manage the employees. For fast file storage and retrieval, I used AWS S3, and for maximal security, the files are server-side encrypted with AWS KMS.


Technologies used:
Backend: NodeJS, Express, Sequelize, Postgres, AWS
Frontend: Javascript, React, Redux, Sass, Html
Website : pos-systems.herokuapp.com
