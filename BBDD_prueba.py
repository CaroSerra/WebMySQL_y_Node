import mysql.connector

# Reemplazar usuario y contraseña
con = mysql.connector.connect(user = "xxxx", password = "xxxx", host = "127.0.0.1")
cursor = con.cursor()

#Creamos la base de datos
cursor.execute("CREATE DATABASE Criptomonedas_Crypto;")
cursor.execute("USE Criptomonedas_Crypto;")

#Creamos la tabla de Usuarios
cursor.execute("""
CREATE TABLE Usuarios (
IDUser INT PRIMARY KEY AUTO_INCREMENT,
Nombre VARCHAR(255),
CorreoElectronico VARCHAR(255),
Contraseña VARCHAR(255));""")