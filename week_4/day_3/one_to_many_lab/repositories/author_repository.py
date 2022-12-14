from db.run_sql import run_sql

from models.author import Author

def save(author):
    sql = "INSERT INTO authors (forename, surname) VALUES (%s, %s) RETURNING *"
    values = [author.forename, author.surname]
    results = run_sql(sql, values)
    id = results[0]['id']
    author.id = id
    return author

def select_all():
    authors = []

    sql = "SELECT * FROM authors"
    results = run_sql(sql)

    for row in results:
        author = Author(row['forename'], row['surname'], row['id'])
        authors.append(author)
    return authors

def select(id):
    author = None
    sql = "SELECT * FROM authors WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)

    if results is not None:
        result = results[0]
        author = Author(result["forename"], result["surname"], result['id'])
    return author

def delete_all():
    sql = "DELETE FROM authors"
    run_sql(sql)

def delete(id):
    sql = "DELETE FROM authors WHERE id = %s"
    values = [id]
    run_sql(sql, values)

def update(author):
    sql = "UPDATE authors SET (forename, surname) = (%s, %s, %s, %s) WHERE id = %s"
    values = [author.forename, author.surname, author.id]
    run_sql(sql, values)
