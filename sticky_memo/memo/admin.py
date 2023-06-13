from django.contrib import admin

# sticky_memo/memo/admin.py

from memo.models import Memo

@admin.register(Memo)
class MemoAdmin(admin.ModelAdmin):
    list_display = ['title']
# Register your models here.
