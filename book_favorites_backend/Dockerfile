#usar uma imagem base do Python
FROM python:3.11

#definir o diretório de trabalho
WORKDIR /app

#copiar os arquivos de requisitos
COPY requirements.txt /app/

#instalar as dependências
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

#copiar o restante do código da aplicação
COPY . /app/

#executar migrações
CMD ["python", "manage.py", "migrate", "&&", "python", "manage.py", "runserver", "0.0.0.0:8000"]
