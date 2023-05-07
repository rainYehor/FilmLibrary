from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from .models import Film

# Create your views here.
def library_films(request):

    all_films = Film.objects.all()

    context = {'all_films': all_films}

    if request.method == 'POST':
        
        user_name = request.POST.get('user_name')
        feedback = request.POST.get('feedback')

        mail_author = 'djangoartur1730@gmail.com'
        
        message = f"Вітаємо, {user_name} залишив свій відгук: \n{feedback}"
        try:
            send_mail('Відгук', message, 'setting.EMAIL_HOST_USER', [mail_author])
        except BadHeaderError:
            context['error'] = 'Знайдено некоректне поле'

    return render(request, 'index.html', context=context)
