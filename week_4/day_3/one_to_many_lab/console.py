import pdb
from models.author import Author
import repositories.author_repository as author_repository
import repositories.book_repository as book_repository

author_repository.delete_all()
book_repository.delete_all()

author1 = Author('Daisy', 'Lafarge')
author2 = Author('Shola', 'von Reinhold')

author_repository.save(author1)
author_repository.save(author2)


pdb.set_trace()