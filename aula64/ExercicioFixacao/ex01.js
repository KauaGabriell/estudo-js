let playlist = [
  'Bohemian Rhapsody - Queen',
  'Like a Rolling Stone - Bob Dylan',
  'Smells Like Teen Spirit - Nirvana',
  'Imagine - John Lennon',
  'Billie Jean - Michael Jackson',
];

/**Parte 1: Remover uma música
O pessoal da festa achou que "Smells Like Teen Spirit" estava muito pesada para o momento.

Tarefa: Use o splice para remover apenas essa música da sua playlist.

Parte 2: Adicionar no meio da fila
Um grupo animado pediu para você tocar "Dancing Queen - ABBA" e "Hey Jude - The Beatles" o mais rápido possível!

Tarefa: Use o splice para adicionar essas duas músicas logo depois de "Bohemian Rhapsody - Queen", sem apagar nenhuma outra.

Parte 3: Substituir uma música
Você decidiu que "Billie Jean" é uma ótima música, mas "Thriller" seria ainda melhor para o clima da festa.

Tarefa: Use o splice para substituir "Billie Jean - Michael Jackson" por "Thriller - Michael Jackson". */

playlist.splice(2, 1);
console.log(playlist);

playlist.splice(1, 0, 'Dancing Queen - ABBA', 'Hey Jude - The Beatles');
console.log(playlist);

playlist.splice(-1, 1, 'Thriller - Michael Jackson');
console.log(playlist);