import mysql.connector
connection = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "12Intercambios",
    database ="dicama",
    port = "3306"
)

mycursor = connection.cursor()
mycursor.execute("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))")
print(connection)
