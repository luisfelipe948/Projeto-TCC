import os
import shutil
from tkinter import Tk, Label, Entry, Button, Text, filedialog, messagebox
from PIL import Image, ImageTk

class GerenciadorPortfolio:
    def __init__(self, root):
        self.root = root
        self.root.title("Gerenciador de Portfólio - TCC")
        self.root.geometry("500x600")
        
        # Caminhos do projeto atualizados para a nova lógica
        self.pasta_destino = "imagens/portfolio"
        self.arquivo_js = "js/script.js" 
        self.caminho_imagem_selecionada = ""

        if not os.path.exists(self.pasta_destino):
            os.makedirs(self.pasta_destino)

        # Interface Visual
        Label(root, text="Título da Imagem:", font=("Arial", 12)).pack(pady=5)
        self.txt_titulo = Entry(root, font=("Arial", 12), width=40)
        self.txt_titulo.pack(pady=5)

        Label(root, text="Descrição:", font=("Arial", 12)).pack(pady=5)
        self.txt_descricao = Text(root, font=("Arial", 12), width=40, height=4)
        self.txt_descricao.pack(pady=5)

        self.btn_selecionar = Button(root, text="Selecionar Imagem", command=self.selecionar_imagem, bg="#2196F3", fg="white", font=("Arial", 10, "bold"))
        self.btn_selecionar.pack(pady=15)

        self.lbl_preview = Label(root, text="Nenhuma imagem selecionada")
        self.lbl_preview.pack(pady=5)

        self.btn_publicar = Button(root, text="🚀 Publicar no Site", command=self.publicar, bg="#4CAF50", fg="white", font=("Arial", 12, "bold"), width=20)
        self.btn_publicar.pack(pady=20)

    def selecionar_imagem(self):
        tipos_arquivos = [("Imagens", "*.jpg *.jpeg *.png *.webp")]
        caminho = filedialog.askopenfilename(title="Escolha a imagem do projeto", filetypes=tipos_arquivos)
        
        if caminho:
            self.caminho_imagem_selecionada = caminho
            img = Image.open(caminho)
            img.thumbnail((150, 150))
            img_tk = ImageTk.PhotoImage(img)
            self.lbl_preview.config(image=img_tk)
            self.lbl_preview.image = img_tk

    def publicar(self):
        # Bloqueia cliques simultâneos
        self.btn_publicar.config(state="disabled")
        self.root.update_idletasks()

        titulo = self.txt_titulo.get().strip()
        descricao = self.txt_descricao.get("1.0", "end-1c").strip()

        if not titulo or not descricao or not self.caminho_imagem_selecionada:
            messagebox.showwarning("Aviso", "Por favor, preencha todos os campos e selecione uma imagem!")
            self.btn_publicar.config(state="normal")
            return

        try:
            # 1. Copiar a imagem para o destino
            nome_arquivo_original = os.path.basename(self.caminho_imagem_selecionada)
            caminho_final_imagem = os.path.join(self.pasta_destino, nome_arquivo_original)
            shutil.copy(self.caminho_imagem_selecionada, caminho_final_imagem)

            # 2. Criar a linha exata em formato Objeto JavaScript
            # Salvamos como categoria "madeira" para testes, mude se preferir!
            nova_linha_js = f'{{ id: Date.now(), nome: "{titulo}", categoria: "madeira", imagem: "imagens/portfolio/{nome_arquivo_original}", descricao: "{descricao}" }},'

            # 3. Injetar direto no topo da lista dentro do arquivo js/script.js
            if os.path.exists(self.arquivo_js):
                with open(self.arquivo_js, "r", encoding="utf-8") as f:
                    linhas = f.readlines()

                novas_linhas = []
                adicionou = False

                for linha in linhas:
                    novas_linhas.append(linha)
                    if "/* LISTA_DINAMICA_PYTHON */" in linha and not adicionou:
                        novas_linhas.append("        " + nova_linha_js + "\n")
                        adicionou = True

                with open(self.arquivo_js, "w", encoding="utf-8") as f:
                    f.writelines(novas_linhas)

            messagebox.showinfo("Sucesso!", f"'{titulo}' publicado e integrado ao sistema de filtros com sucesso!")
            
            # Limpar os campos
            self.txt_titulo.delete(0, "end")
            self.txt_descricao.delete("1.0", "end")
            self.lbl_preview.config(image="", text="Nenhuma imagem selecionada")
            self.caminho_imagem_selecionada = ""

        except Exception as e:
            messagebox.showerror("Erro", f"Ocorreu um erro ao publicar: {e}")
        finally:
            self.btn_publicar.config(state="normal")

if __name__ == "__main__":
    root = Tk()
    app = GerenciadorPortfolio(root)
    root.mainloop()