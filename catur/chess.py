   import pygame
   import sys

   # Inisialisasi Pygame
   pygame.init()

   # Ukuran layar
   screen_size = 800
   screen = pygame.display.set_mode((screen_size, screen_size))
   pygame.display.set_caption('Custom Chess')

   # Warna
   WHITE = (255, 255, 255)
   BLACK = (0, 0, 0)
   RED = (255, 0, 0)
   BLUE = (0, 0, 255)

   # Ukuran kotak
   square_size = screen_size // 8

   # Fungsi untuk menggambar papan catur
   def draw_board():
       colors = [WHITE, BLACK]
       for row in range(8):
           for col in range(8):
               color = colors[(row + col) % 2]
               pygame.draw.rect(screen, color, pygame.Rect(col * square_size, row * square_size, square_size, square_size))

   # Fungsi untuk menggambar bidak
   def draw_piece(row, col, color, shape):
       center = (col * square_size + square_size // 2, row * square_size + square_size // 2)
       if shape == 'circle':
           pygame.draw.circle(screen, color, center, square_size // 3)
       elif shape == 'square':
           pygame.draw.rect(screen, color, pygame.Rect(col * square_size + square_size // 4, row * square_size + square_size // 4, square_size // 2, square_size // 2))

   # Loop utama
   while True:
       for event in pygame.event.get():
           if event.type == pygame.QUIT:
               pygame.quit()
               sys.exit()

       draw_board()
       draw_piece(0, 0, RED, 'circle')  # Contoh bidak merah berbentuk lingkaran
       draw_piece(1, 1, BLUE, 'square')  # Contoh bidak biru berbentuk kotak

       pygame.display.flip()